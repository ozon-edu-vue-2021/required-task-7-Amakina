window.CustomRenderer = (function() {
    const core = {}
    const config = {}
    const components = {}

    const setRoot = (root) => {
        config.root = document.getElementById(root)
    }

    const initStore = (store) => {
        const state = {}
        const mutations = {}
        const actions = {}

        const commit = (name, ...params) => {
            mutations[name](...params)
        }

        Object.keys(store.state).forEach(key => {
            let value = store.state[key]
            Object.defineProperty(state, key, {
                get: () => {
                    return value
                },
                set: (newValue) => {
                    value = newValue
                    core.render()
                }
            })
        })

        Object.keys(store.mutations).forEach(key => {
            mutations[key] = (...params) => store.mutations[key](state, ...params)
        })

        Object.keys(store.actions).forEach(key => {
            actions[key] = (...params) => store.actions[key](commit, ...params)
        })

        core.store = { state, mutations, actions }
    }

    const setMainFunction = (func) => {
        config.mainFunction = func
    }

    core.init = (options) => {
        setRoot(options.root)
        initStore(options.store)    
        setMainFunction(options.main)

        core.render()
    }

    core.render = () => {
        config.root.innerHTML = ''
        config.root.appendChild(config.mainFunction())
    }

    core.createElement = ({ tag, children = [], attributes = {}, on = {} }) => {
        const element = document.createElement(tag)

        children.forEach(child => {
            if (typeof child === 'string') {
                const textNode = document.createTextNode(child)
                element.appendChild(textNode)
                return
            }
            element.appendChild(child)
        })

        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value)
        })

        Object.entries(on).forEach(([key, value]) => {
            element.addEventListener(key, value)
        })

        return element
    }

    core.registerComponent = (name, component) => {
        components[name] = component
    }

    return core
})()