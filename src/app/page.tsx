export default function Home() {

  const features = [
    { id: 1, title: "Fast Transactions", description: "Experience lightning-fast transactions with Zenpay." },
    { id: 2, title: "Secure Payments", description: "Your payments are safe and secure with our advanced encryption." },
    { id: 3, title: "Easy Integration", description: "Integrate Zenpay seamlessly into your existing systems." },
    { id: 4, title: "24/7 Support", description: "Get round-the-clock support from our dedicated team." },
  ];

  return (
    <>

      <main className="lg:flex hidden relative min-h-screen flex-col bg-slate-500">
        <img src="https://images.pexels.com/photos/3518623/pexels-photo-3518623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="absolute w-[100%] h-screen" />

        <span className="flex absolute px-14 justify-between w-[100%] py-4">
          <span className="text-xl font-bold text-white">Zenpay</span>
          <span className="flex flex-row text-lg text-white gap-4 ">
            <button>About</button>
            <button>Products</button>
            <button>Resources</button>
            <button>Support</button>
          </span>
          <span className="flex flex-row gap-4 text-lg text-white">
            <button className="bg-white text-black py-1 px-2 rounded-xl">Signin</button>
            <button>Signup</button>
          </span>
        </span>

        <p className="flex flex-col gap-2 absolute justify-center items-center text-white w-[100%] h-screen">
          <span className="text-4xl font-bold ">Revolutioanlize Your</span>
          <span className="text-4xl font-bold">Payments Experience</span>
          <span className="w-[60%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum maxime, ullam harum itaque architecto a consequatur rerum eligendi neque nesciunt, eum reprehenderit nobis. Asperiores aperiam inventore, cumque voluptatum obcaecati minima.</span>
          <span className="flex flex-row gap-2">
            <button className="bg-sky-600 hover:bg-white hover:text-black rounded-lg p-1">Start now</button>
            <button className="bg-sky-600 hover:bg-white hover:text-black rounded-lg p-1">Explore Zenly</button>
          </span>
        </p>

      </main>

      <div className="lg:flex hidden flex-wrap justify-center p-8  bg-cyan-600">
        {features.map((feature) => (
          <div key={feature.id} className="w-1/4 p-4 m-2 bg-slate-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="lg:flex hidden bg-teal-900 text-white px-28 justify-evenly ">
        <span className="p-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta ipsum distinctio, mollitia animi explicabo sed ea inventore omnis. Error minima illum blanditiis nostrum autem accusamus hic numquam, recusandae quo?</span>
        <span className="p-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut omnis aperiam culpa accusantium possimus explicabo alias perferendis voluptatibus dolores? Quaerat neque aperiam aliquam hic, blanditiis incidunt delectus maxime qui.</span>
      </div>

      <div className="lg:hidden flex bg-black text-white w-[100%] h-screen">
        <p className="flex flex-col gap-2 absolute justify-center items-center text-white w-[100%] h-screen">
        
        USE DESKTOP FOR BETTER EXPERIENCE

        </p>
      </div>

    </>
  );
}