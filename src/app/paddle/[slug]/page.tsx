import { paddle } from "@/paddle";


export function generateMetadata({params}: PlatypusParams){
  const plat = getPlat(params.slug);
  return (
    {
    title: `${plat?.name}`,
    description: `${plat?.description}`,
    }
    )
}

type PlatypusParams = {
  params: {
    slug: string;
  };
};

function getPlat(slug:string){
  return paddle.find(plat=>plat.slug=== slug); 
}

export default function PlatypusPage({params}: PlatypusParams) {
  const plat = getPlat(params.slug);
  return (
    <div>
        <h2>{plat?.name}</h2>
        <p>{plat?.description}</p>
        <p>Age: {plat?.age}</p>
    </div>
  )
}
