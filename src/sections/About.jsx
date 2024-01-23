import chat from "../assets/discord-chat.webp"

const About = () => {
  return (
   <section className="mt-[-30vh]">
    <div className="h-[300vh] w-full">
      <div className="sticky top-[10vh]">
        <div className="flex justify-center">
          <div className=" origin-top">
            <img src={chat} alt="about" 
            className="h-[75vh] max-h-[45vw] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About