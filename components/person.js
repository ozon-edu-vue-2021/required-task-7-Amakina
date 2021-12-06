const renderPerson = ({ person }) => {
    const name = CustomRenderer.createElement({
        tag: 'div',
        attributes: {
            class: 'person__name'
        },
        children: [person.name],
    })

    return CustomRenderer.createElement({
        tag: 'div',
        children: [name],
        attributes: {
            class: 'person'
        },
        on: {
            click: () => {
                CustomRenderer.store.mutations.setSelectedPerson(person)
            }
        }
    })
}