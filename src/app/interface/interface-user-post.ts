export interface user {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  company: { name: string }
}

export interface posts {
  userId: string,
  id: String,
  title: string,
  body: string
}

export interface todos{
  userId: string,
  id: string, 
  title: string,
  completed: string
}