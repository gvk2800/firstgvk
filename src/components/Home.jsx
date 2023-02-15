import React from 'react'
import vg from "../assets/2.webp"
import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div class="home"id='home'>
        <main>
            <h1>Tech IT Solutions</h1>
            <p>Web Solutions to all your problems
                
            </p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            </p>
        </div>
    </div>
    <div className="home3"id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repellendus. Eius ratione a iusto adipisci, praesentium, suscipit unde sapiente voluptatum neque accusantium quas, aperiam aspernatur alias? Laudantium tempora iste vel et dolore eum assumenda consequuntur hic voluptatum dolores corporis totam excepturi, facilis incidunt, placeat quod ipsum adipisci ratione labore ex distinctio. Sed laudantium enim exercitationem deleniti in mollitia ea quibusdam et earum reiciendis dignissimos voluptatem recusandae, atque laboriosam expedita excepturi nemo repellendus ex impedit delectus a dolores. Sed voluptatum a tempore, assumenda mollitia inventore tenetur. Minima hic architecto, necessitatibus tenetur ipsum reiciendis eligendi repellat. Ipsum aperiam tenetur quidem neque inventore!</p>
        </div>
    </div>
    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home