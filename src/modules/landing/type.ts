export interface InfoContent {
  title: string
  icon: string
  description: string
  image: any
}

export interface InfoSection {
  title: string
  contents: InfoContent[]
}

//--------------------------------------

export interface FaqContent {
  title: string
  description: string
}
export interface FaqSection {
  title: string
  contents: FaqContent[]
}
