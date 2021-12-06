const friendsViewComponent = () => {
    const { peopleMap, selectedPerson, popularPeople: toCheckPopular } = CustomRenderer.store.state

    if (!peopleMap || !peopleMap[selectedPerson.id]) {
        return CustomRenderer.createElement({
            tag: 'div',
            children: []
        })
    }

    const { friends, notFriends } = getFriendsList(peopleMap[selectedPerson.id], peopleMap)
    const popularPeople = toCheckPopular
        .filter(({ person }) => {
            return person.id !== selectedPerson.id
        })
        .slice(0, MAX_ELEMENTS_NUM)
        
    const categories = renderCategories({ friends, notFriends, popularPeople })

    const selectedPersonView = renderSelectedPerson(peopleMap[selectedPerson.id])

    const personView = CustomRenderer.createElement({
        tag: 'div',
        children: [selectedPersonView, categories]
    })

    return personView
}
