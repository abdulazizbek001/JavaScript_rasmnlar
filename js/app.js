const images = ['https://avatars.mds.yandex.net/i?id=80d5a824fef84432635be20be5c97bf53017b93a-10814799-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=490dc6765df8c978dbc35da03326091c9bfbebcb-8804196-images-thumbs&ref=rim&n=33&w=480&h=270', 'https://avatars.mds.yandex.net/i?id=d15608315bdba5c79c93a2548afefff4e44a3e74-10414807-images-thumbs&ref=rim&n=33&w=480&h=270', 'https://avatars.mds.yandex.net/i?id=e4b20b945fe94580d713b9d16dfeb13a454a9b14-12218216-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=0d4287d3f9b736a7cee50b4fd72889bb3529fb30-10952395-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=af5604feaea0b55065aa095733046a54b7946563-10369171-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=8850b35d7287f8b7ae53cb46b6a7b637dd2093d0-5211215-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=65be7da71977b2041a288792a98bcd8486ecf27c-5329285-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=df2b264671d0370c731f2b8303d36287397d0909-5667442-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=b3bc00b13dc99414b4bec0ced083637dec269806-12314646-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=3b8567901ed225982e42dc801e03b0308bef6dcb-12486332-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=04e758d6788e2899a315783ed8f31961dd66f695-11459613-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=75cd5e1662a4505dfade8beb67231f9ae66fa1eb-10637298-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=af03bd04d229077a1f571504a47cf269cdedba84-10548602-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=acf63a3c342b850043d95fd6481291a032eb7d98-10597937-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=c56a6d6deb16ffc279fe19a4cc0edb62b4c40085-12325159-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=d6c88f8d07fe360fef78aa8a4b411827b1f84fa9-9541119-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=b9f4848f25e29cd7ac501ce888ca9067-4944707-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=2b65377c1a6277f9574a935ce4b02e078a492578-10878270-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=784e549b5a1ef1d1c95a10feaacd0edbb360a7a8-10919901-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=d4b4759f89833e5d7277f5e53229004ade6ec36c-5218109-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=252682ea8dfabdc929b744a3981311a5fd6c44a8-10527650-images-thumbs&n=13', 'https://cdn.dribbble.com/users/19417/screenshots/2094063/media/6b0e12027d8e8c3f057a507ea640c91f.png', 'https://avatars.mds.yandex.net/i?id=e456abcff8a2bc83f3a446e022e9dea75b542d6f-9700958-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=e98915b275bd14ec6755daa15b162a59a836a4e6-10652863-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=b902c3c6cf0cbee696a2913df4410161511e1aff-10840831-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=53ef1b269824b1dc0197a68fe5be274ea6673145-11459613-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=33e48dd20aee8b9b3289a7c7bab4f59b867597a4-8437205-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=bc8c71f28d7555842358430d1ee0b8cd05abd383-5295169-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=b55f17d93282f73eded1551e2378e566e2b8097a-3397820-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=0eef2174cc59d71fc6466a1a8aaec892223f4b18-10995513-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=a8b8d7d16667dc37bf9cb81d0907a769b0894a86-8910959-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=e4d191b71596ca9015eb65afd5606e698b37de4d-4960885-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=0192ce17eaac696a19a22087c0c32149361dc9fa-11026079-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=2b1623a807bdc4b8f0329f87cd3b5086e5be0c13-4834298-images-thumbs&n=13'];


images.forEach((element, index) => {
    const elItem = document.createElement('img');

    elItem.src = element
    elItem.textContent = index + 1
    document.body.append(elItem);

    elItem.style.cssText = `
        width: 300px;
        height: 200px;
        border-radius: 10px;
    `

    document.body.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    `
})