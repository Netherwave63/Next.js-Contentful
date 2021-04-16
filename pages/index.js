import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Next.js | Dictionary</title>
        <meta name="description" content="This is the homepage" />
      </Head>

      <section className="section">
        <h1 className="title">Homepage</h1>
        <div className="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla accumsan arcu ac tempor. Curabitur ultricies tristique nisl ut sodales. Curabitur lacinia eget neque sit amet hendrerit. In in tortor ac metus bibendum efficitur vitae sed dolor. Sed velit sem, ultricies eget lacus nec, tincidunt hendrerit ante. Sed et velit lacinia, suscipit nunc at, volutpat dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquet interdum dolor a ullamcorper. Mauris faucibus condimentum enim, sed maximus ipsum scelerisque euismod. Duis neque orci, pharetra tincidunt diam nec, lobortis vestibulum magna. Nullam varius, tellus nec sollicitudin congue, nunc magna pellentesque quam, at auctor dolor sapien eu nisi. Aenean accumsan mi non erat eleifend, sed vestibulum arcu dignissim. Proin justo risus, hendrerit a justo et, sodales sollicitudin est. Proin velit odio, fermentum vitae eleifend et, efficitur a nisi.</p>
        </div>
      </section>
    </>
  )
}

export default Home
