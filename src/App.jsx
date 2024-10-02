import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";



 const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]
          bg-no-repeat bg-contain min-h-screen bg-gray-300">
        <header className=" container mx-auto px-4 pt-8">
          <div className=" flex justify-between">
            <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]"> Todo </h1>
            <button> <MoonIcon /> </button> 
          </div>
          <form className=" overflow-hidden rounded-md bg-white py-4 px-4 flex gap-4 items-center mt-8">
            <span className=" rounded-full border-2 h-5 w-5 inline-block"></span>
            <input className=" w-full text-gray-400 outline-none" type="text" placeholder="Create a new todo...." />  
            
          </form> 
        </header>
        <main className="container mx-auto px-4 mt-8">
          <div className=" bg-white rounded-md [&>article]:p-4 ">
              <article className=" flex gap-4  border-b border-b-gray-400 ">
                <button className="rounded-full border-2 h-5 w-5 inline-block flex-none">  </button>
                <p className=" text-gray-600 grow">Complete online Javascript curso</p>
                <button className=" flex-none"> <CrossIcon /> </button>
              </article>
              <article className=" flex gap-4  border-b border-b-gray-400 ">
                <button className="rounded-full border-2 h-5 w-5 inline-block flex-none">  </button>
                <p className=" text-gray-600 grow">Complete online Javascript curso</p>
                <button className=" flex-none"> <CrossIcon /> </button>
              </article>
              <article className=" flex gap-4  border-b border-b-gray-400 ">
                <button className="rounded-full border-2 h-5 w-5 inline-block flex-none">  </button>
                <p className=" text-gray-600 grow">Complete online Javascript curso</p>
                <button className=" flex-none"> <CrossIcon /> </button>
              </article>
              <article className=" flex gap-4  border-b border-b-gray-400 ">
                <button className="rounded-full border-2 h-5 w-5 inline-block flex-none">  </button>
                <p className=" text-gray-600 grow">Complete online Javascript curso</p>
                <button className=" flex-none"> <CrossIcon /> </button>
              </article>
              <article className=" flex gap-4  border-b border-b-gray-400 ">
                <button className="rounded-full border-2 h-5 w-5 inline-block flex-none">  </button>
                <p className=" text-gray-600 grow">Complete online Javascript curso</p>
                <button className=" flex-none"> <CrossIcon /> </button>
              </article>
              <section className=" flex justify-between px-4 py-4">
                <span className=" text-gray-400">5 items left</span>
                <button className=" text-gray-400">Clear completed</button>
              </section>
          </div>
        </main>
        <section  className="container mx-auto mt-8 px-4">
          <div className=" bg-white p-4 flex justify-center gap-4">
            <button className="text-blue-600"> All </button>
            <button className=" hover:text-blue-600"> Active </button>
            <button className=" hover:text-blue-600"> Completed </button>
          </div>
        </section>

        <section className=" text-center mt-8"> Drag and drop to reader list</section>
    </div>
  )
}


export default App