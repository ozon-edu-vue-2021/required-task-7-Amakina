const renderSelectedPerson = ({ person }) => {
    const name = CustomRenderer.createElement({
        tag: 'div',
        attributes: {
            class: 'selected-person__name'
        },
        children: [person.name],
    })    

    const backButton = CustomRenderer.createElement({
        tag: 'div',
        attributes: {
            class: 'selected-person__back'
        },
        on: {
            click: () => {
                CustomRenderer.store.mutations.setSelectedPerson(null)
            }
        }
    })

    const background = CustomRenderer.createElement({
        tag: 'div',
        attributes: {
            class: 'selected-person__background'
        },
    })

    return CustomRenderer.createElement({
        tag: 'div',
        children: [backButton, background, name],
        attributes: {
            class: 'selected-person'
        }
    })
}