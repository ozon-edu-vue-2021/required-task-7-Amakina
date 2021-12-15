const renderPeopleList = ({ list, title }) => {
    const listElements = list.map(({ person }) => {
        const personIcon = CustomRenderer.createElement({
            tag: 'i',
            attributes: {
                class: 'fa fa-male'
            }
        })
    
        const name = CustomRenderer.createElement({
            tag: 'span',
            children: [person.name],
        })
    
        return CustomRenderer.createElement({
            tag: 'li',
            attributes: {
                class: 'people-category__person'
            },
            children: [personIcon, name],
        })
    })
    
    const titleElement = CustomRenderer.createElement({
        tag: 'div',
        children: [title],
        attributes: {
            class: 'people-category__title'
        }
    })
    
    const elementsList = CustomRenderer.createElement({
        tag: 'ul',
        attributes: {
            class: 'people-category__list'
        },
        children: [...listElements],
    })
    
    return CustomRenderer.createElement({
        tag: 'div',
        attributes: {
            class: 'people-category'
        },
        children: [titleElement, elementsList],
    })
}