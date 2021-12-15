const getFriendsList = ({ person }, peopleMap) => {
    const friends = []
    const notFriends = []

    for (let i = 0; i < Math.min(MAX_ELEMENTS_NUM, person.friends.length); i++) {
        friends.push(peopleMap[person.friends[i]])
    }

    for (let key in peopleMap) {
        const id = Number(key)

        if (id === person.id) continue

        const isFriend = person.friends.includes(id)

        if (!isFriend) {
            notFriends.push(peopleMap[id])
        }

        if (notFriends.length === MAX_ELEMENTS_NUM) {
            break
        }
    }
    
    return { friends, notFriends }
}