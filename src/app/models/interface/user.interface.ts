// export interface User {
//     username: string;
//     email: string;
//     password: string;
//     language: string;
//     experience: string;
//     profilePic?: string;
// }

export interface UserResponse {
    responseCode: string
    responseMsg: string
    data: User
  }
  
  export interface User {
    username: string
    email: string
    password: string
    language: string
    experience: string
    profilePic: string
    _id: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  