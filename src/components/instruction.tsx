import { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface IProps {
  instruction: {
    sectionTitle: string
    sectionTime: string
    instructions: ReactNode[]
    informations: string[]
  }
  onNavigate: () => void
}

export const Instructions = ({ instruction, onNavigate }: IProps) => {
  const { sectionTitle, sectionTime, instructions, informations } = instruction

  return (
    <div className="p-3.5 w-full">
      <Card className="w-full bg-tertiary-card shadow-md rounde-sm text-sm">
        <CardHeader>
          <h1 className="text-xl font-semibold">{sectionTitle}</h1>
          <p>Time: {sectionTime}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <section>
            <h3 className="font-semibold mb-4">INSTRUCTIONS TO CANDIDATES</h3>
            <ul className="list-disc pl-10 space-y-1">
              {instructions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="font-semibold mb-4">INFORMATION FOR CANDIDATES</h3>
            <ul className="list-disc pl-10 space-y-1">
              {informations.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          <div className="flex items-center justify-center">
            <p className="bg-no-repeat font-bold text-[#575757] pl-6 bg-[left_2px] text-foreground bg-[url('https://s3-eu-west-1.amazonaws.com/oep2stt/sample-listening-plan-map-diagram-labelling/images/main/iconInformation16.png')]">
              Read instructions and start only when ready.
            </p>
          </div>
          <div className="flex justify-center">
            <Button onClick={onNavigate} className="mb-3.5" variant="link">
              Start test
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
