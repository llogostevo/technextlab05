import {paddle} from "@/paddle";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Paddle of Platypus',
    description: 'This is the paddle of platypus at our disposal',
  }

export default function PaddlePage() {
  return (
    <div>
        <h3>Paddle Page</h3>
        <div className="paddle-grid">
        {paddle.map((platypus)=>{
            return(
                <div key={platypus.slug}>
                    <h4><Link href={`/paddle/${platypus.slug}`}>{platypus.name}</Link></h4>
                    <ul>
                        <li>{platypus.description}</li>
                        <li>Age: {platypus.age}</li>

                    </ul>
                </div>
            )
        })}
        </div>
    </div>
  )
}
