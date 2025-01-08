import { Posts_card } from "../Components/Posts_card";

export const Posts = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 p-4">
      <Posts_card
        heading={'Hello World!'}
        subheading={"This is the setup where all my work is done. It's a little messy and has a dirty keyboard but I promise I keep all the things clean 😉"}
        hashtag={"#workplace #setup #coding"}
        src={'https://pbs.twimg.com/media/GTv_k3PW8AIvDv0?format=jpg&name=small'}
      />
      <Posts_card
        heading={'My leetcode journey...'}
        subheading={"I have been doing leetcode for a while now and I must say it's a great platform to practice coding problems. I have solved 100+ problems till now."}
        hashtag={"#leetcode #dsa #hard"}
        src={'../public/assets/leetcode.jpg'}
      />
      <Posts_card
        heading={'My first project...'}
        subheading={"I have been working on my first project for a while now. It's a new fast food company that delivers food at your doorstep."}
        hashtag={"#webdev #project"}
        src={'https://pbs.twimg.com/media/GXSrOo9WYAAxSop?format=jpg&name=4096x4096'}
      />
    </div>
  );
};
