import {config} from 'dotenv'

config()


export const port = process.env.PORT || 4000
export const db_user= process.env.DB_USER || 'postgres'
export const db_host= process.env.DB_HOST || 'localhost'
export const db_database= process.env.DB_DATABASE || 'videogames'
export const db_password=process.env.DB_PASSWORD || 'jorge123'
export const db_port =process.env.DB_PORT || 4332
