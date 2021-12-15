const main = () => {
    const { selectedPerson } = CustomRenderer.store.state

    if (!selectedPerson) {
        return peopleListComponent()
    }

    return friendsViewComponent()
}