import Directory from "../../components/directory/directory.component";

const Home = () => {
    const categories = [
      {
        id: 1,
        title: 'hats',
        imageUrl: 'https://source.unsplash.com/MNzyXXfnnCg',
        route: 'shop/hats'
      },
      {
        id: 2,
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        route: 'shop/jackets'
      },
      {
        id: 3,
        title: 'boots',
        imageUrl: 'https://source.unsplash.com/_1CTbB3ibZE',
        route: 'shop/boots'
      },
      {
        id: 4,
        title: 'womens',
        imageUrl: 'https://source.unsplash.com/cER9O6ZBGZ4',
        route: 'shop/womens'
      },
      {
        id: 5,
        title: 'mens',
        imageUrl: 'https://source.unsplash.com/jyqyKbp0iqg',
        route: 'shop/mens'
      },
    ];
  
  
    return (
      <Directory categories={categories}/>
    );
  };
  
  export default Home;