
export const getCarousels = async (req, res) => {
    const list = []
    const slidesList = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Man%C3%A8geLR1.jpg",
            title: "Title1",
            subTitle: "SubTitle1"
        },
        {
            image: "https://www.tourisme-sete.com/medias/images/prestataires/venetian-carousel-manege-sete-3489-2.jpg",
            title: "Title2",
            subTitle: "SubTitle2"
        },
        {
            image: "https://a.cdn-hotels.com/gdcs/production134/d1054/893261d0-5a57-417a-b42d-9ce1c63dcb64.jpg?impolicy=fcrop&w=800&h=533&q=medium",
            title: "Title3",
            subTitle: "SubTitle3"
        },
        {
            image: "https://www.centralpark.com/downloads/9530/download/carousel-2016.jpg?cb=3a2c4908a33d0acb3728c49be4b5a5b4&w=1200",
            title: "Title4",
            subTitle: "SubTitle4"
        },
        {
            image: "https://dreamlandamusements.com/wp-content/uploads/2021/03/IMG_2686-3-scaled.jpg",
            title: "Title5",
            subTitle: "SubTitle5"
        },
        {
            image: "http://www.noozhawk.com/images/made/images/uploads/042319-Santa-Barbara-Fair-Expo-5-bh_2600_1200_800_s.jpg",
            title: "Title6",
            subTitle: "SubTitle6"
        }
    ]
    try {
        const { slides } = req.query;
        for (let i = 0; i < Number(slides); i++) {
            list.push(slidesList[i % slidesList.length])
        }
        res.status(200).json({ slides: list });
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json(id);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    try {
        res.status(200).json(post);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    try {

    } catch (error) {

        res.status(409).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        res.json({ message: 'Post deleted successfully' })
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
}


