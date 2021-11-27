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
        "cards": [
            {
                "id": "1",
                "name": "math1",
                "material": "this is material for this card"
            },
            {
                "id": "2",
                "name": "math2",
                "material": "this is material for this card"
            },
            {
                "id": "3",
                "name": "math3",
                "material": "this is material for this card"
            },
            {
                "id": "4",
                "name": "math4",
                "material": "this is material for this card"
            },
            {
                "id": "5",
                "name": "math5",
                "material": "this is material for this card"
            }
        ],
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
        "cards": [
            {
                "id": "1",
                "name": "stats1",
                "material": "this is material for this card"
            },
            {
                "id": "2",
                "name": "stats2",
                "material": "this is material for this card"
            },
            {
                "id": "3",
                "name": "stats3",
                "material": "this is material for this card"
            },
            {
                "id": "4",
                "name": "stats4",
                "material": "this is material for this card"
            },
            {
                "id": "5",
                "name": "stats5",
                "material": "this is material for this card"
            }
        ],
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
        "cards": [
            {
                "id": "1",
                "name": "geom1",
                "material": "this is material for this card"
            },
            {
                "id": "2",
                "name": "geom2",
                "material": "this is material for this card"
            },
            {
                "id": "3",
                "name": "geom3",
                "material": "this is material for this card"
            },
            {
                "id": "4",
                "name": "geom4",
                "material": "this is material for this card"
            },
            {
                "id": "5",
                "name": "geom5",
                "material": "this is material for this card"
            }
        ],
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
        "cards": [
            {
                "id": "1",
                "name": "cooking1",
                "material": "this is material for this card"
            },
            {
                "id": "2",
                "name": "cooking2",
                "material": "this is material for this card"
            },
            {
                "id": "3",
                "name": "cooking3",
                "material": "this is material for this card"
            },
            {
                "id": "4",
                "name": "cooking4",
                "material": "this is material for this card"
            },
            {
                "id": "5",
                "name": "cooking5",
                "material": "this is material for this card"
            }
        ],
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

export const getCollectionsById = (id) => {
    return new Promise((res,rej) => res(collections.filter(collection => collection.author.id === id)));
}

export const getCollection = (id) => {
    return new Promise((res,rej) => res(collections.filter(collection => collection.id === id)[0]));
}