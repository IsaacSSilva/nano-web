import Header from "@/components/Header"
import getData from "../api/http/get"
import { DateTopics } from "@/Types/interfaces"
import { formattedDate } from "@/utils/validateDate"

export const Topics = async () => {

    const render = await getData.topics()    

    return (
        <>
            {
                render[0] ? (
                    render.map((topic: DateTopics) => {
                        console.log(topic.creat_at);
                        console.log(topic.update_at);
                        

                        return (
                            <Header.linsten key={topic.id}>
                                <Header.topics.root key={topic.id}>
                                    
                                    <Header.topics.title key={topic.id} date_at={formattedDate(topic.creat_at,topic.update_at)}>
                                    {topic.title}
                                    </Header.topics.title>

                                    <Header.topics.body
                                    key={topic.id}
                                    flag={topic.flag}
                                    url_img={topic.url_img}
                                    alt={topic.title}
                                    width={360}
                                    height={360}
                                    >
                                        {topic.description}
                                    </Header.topics.body>

                                </Header.topics.root>
                            </Header.linsten>
                        )
                    })
                ) : (

                    <div className="w-full h-20 rounded border border-zinc-200/5 bg-zinc-900/60 flex justify-center items-center text-sm text-zinc-700/80" >
                        Not Found
                    </div>
                )
            }
        </>
        
    )
}