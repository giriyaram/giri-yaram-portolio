import Image from "next/image";


const ProjectListCard = () => {
  return (
    <>
    {/* Project Cards */}
    <div className="relative">
        <div className="w-full h-full absolute ">
          <img
            src="/grid.svg"
            alt="{img}"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 border border-white/[0.1] p-4 rounded-2xl z-30">
          {/* project 1 */}
            <div className="flex gap-6">
                <Image src="/next.svg" alt="" width={80} height={80}/>
                <div className="flex flex-col justify-center">
                  <h3 className="text-5xl">3</h3>
                  <p className="font-light">Next.js Projects</p>
                </div>
            </div>

             {/* project 2 */}
             <div className="flex gap-6">
                <Image src="/react.svg" alt="" width={80} height={80}/>
                <div className="flex flex-col justify-center">
                  <h3 className="text-5xl">2</h3>
                  <p className="font-light">React Projects</p>
                </div>
            </div>
             {/* project 3 */}
             <div className="flex gap-6">
                <Image src="/spring.svg" alt="" width={80} height={80}/>
                <div className="flex flex-col justify-center">
                  <h3 className="text-5xl">1</h3>
                  <p className="font-light">Spring Boot Project</p>
                </div>
            </div>

            {/* project 4 */}
                <div className="flex gap-6">
                <Image src="/js.svg" alt="" width={80} height={80}/>
                <div className="flex flex-col justify-center">
                  <h3 className="text-5xl">2</h3>
                  <p className="font-light">JavaScript Projects</p>
                </div>
            </div>
             
        </div>
      </div>
    </>
  );
}

export default ProjectListCard