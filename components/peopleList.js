const peopleListComponent = () => {
    const { people } = CustomRenderer.store.state

    const renderedPeople = people.map(person => {
        return renderPerson({ person })
    })

    return CustomRenderer.createElement({
        tag: 'div',
        children: renderedPeople
    })
}