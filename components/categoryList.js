const renderCategories = ({ friends, notFriends, popularPeople }) => {
    const friendsListContainer = renderPeopleList({ list: friends, title: 'Друзья' })
    const notFriendsListContainer = renderPeopleList({ list: notFriends, title: 'Не в друзьях' })
    const popularListContainer = renderPeopleList({ list: popularPeople, title: 'Популярные люди' })
    
    return CustomRenderer.createElement({
        tag: 'div',
        children: [
            friendsListContainer,
            notFriendsListContainer,
            popularListContainer
        ],
    })
}