const MAX_ELEMENTS_NUM = 3

CustomRenderer.init({
    root: 'container',
    store: {
        state: {
            people: [],
            popularPeople: [],
            peopleMap: {},
            selectedPerson: null,
            history: []
        },

        mutations: {
            setSelectedPerson(state, person) {
                state.selectedPerson = person
            },
            setPeople(state, people) {
                state.people = people
            },
            setPopularPeople(state, popularPeople) {
                state.popularPeople = popularPeople
            },
            setPeopleMap(state, peopleMap) {
                state.peopleMap = peopleMap
            }
        },

        actions: {
            fetchPeople: async (commit) => {
                const popularity = {}

                const setIfNotExists = (newPerson) => {
                    const { id, person } = newPerson

                    if (!popularity[id]) {
                        popularity[id] = {}
                    }

                    if (!popularity[id].person && person) {
                        popularity[id].person = person
                    }

                    if (!popularity[id].rating) {
                        popularity[id].rating = 0
                    }
                }

                data.forEach(person => {
                    setIfNotExists({id: person.id, person})
                    
                    person.friends.forEach(friend => {
                        setIfNotExists({ id: friend })
                        popularity[friend].rating += 1
                    })
                })

                const sortedPeople = Object.values(popularity).sort((a, b) => b.rating - a.rating)
                const topPeople = 
                    MAX_ELEMENTS_NUM > sortedPeople.length
                    ? topPeople.slice(0, sortedPeople.lastIndexOf(topPeople[MAX_ELEMENTS_NUM]))
                    : sortedPeople
                const popularPeople = topPeople
                    .sort((a, b) => {
                        if (a.rating !== b.rating) return 0
                        if (a.person.name > b.person.name) return 1
                        return -1
                    })
                    .slice(0, MAX_ELEMENTS_NUM + 1)

                commit('setPeopleMap', popularity)
                commit('setPopularPeople', popularPeople)
                commit('setPeople', data)
            }
        }
    },
    main: main
})

CustomRenderer.store.actions.fetchPeople()

