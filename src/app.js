const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
    // console.log(envs)
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async () => {
    main()
})() //funcion agnostica y autoconvocada , osea que no tienen nombre y se autoejecuta con los ultimos ()
