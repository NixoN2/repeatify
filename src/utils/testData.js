const users = [
    {
        "email": "mythtics2001@mail.ru",
        "first_name": "Andrew",
        "last_name": "Zhukov",
        "id": "1",
        "role": "admin"
    },
    {
        "email": "aegorov@mail.ru",
        "first_name": "Alexandr",
        "last_name": "Egorov",
        "id": "2",
        "role": "user"
    }
]

const collections = [
    {
        "id": "1",
        "name": "math",
        "privateCollection": "false",
        "description": "math description",
        "author": {
            "id": "1",
            "first_name": "Andrew",
            "last_name": "Zhukov",
            "role": "admin",
            "email": "mythtics2001@mail.ru"
        },
        "cards": [],
        "editors": []
    },
    {
        "id": "2",
        "name": "stats",
        "privateCollection": "false",
        "description": "stats description",
        "author": {
            "id": "1",
            "first_name": "Andrew",
            "last_name": "Zhukov",
            "role": "admin",
            "email": "mythtics2001@mail.ru"
        },
        "cards": [],
        "editors": []
    },
    {
        "id": "3",
        "name": "geom",
        "privateCollection": "true",
        "description": "geom description",
        "author": {
            "id": "1",
            "first_name": "Andrew",
            "last_name": "Zhukov",
            "role": "admin",
            "email": "mythtics2001@mail.ru"
        },
        "cards": [],
        "editors": []
    },
    {
        "id": "4",
        "name": "cooking",
        "privateCollection": "false",
        "description": "cooking description",
        "author": {
            "email": "aegorov@mail.ru",
            "first_name": "Alexandr",
            "last_name": "Egorov",
            "id": "2",
            "role": "user"
        },
        "cards": [],
        "editors": []
    }
]

export const login = (email) => {
    return new Promise((res,rej) => res(users.filter(user => user.email === email)[0]))
}

export const getUser = (id) => {
    return new Promise((res,rej) => res(users.filter(user => user.id === id)[0]))
}

export const getCollections = () => {
    return new Promise((res,rej) => res(collections));
}

export const getCollection = (id) => {
    return new Promise((res,rej) => res(collections.filter(collection => collection.author.id === id)));
}
