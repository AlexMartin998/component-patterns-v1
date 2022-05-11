# NPM Deploy - Desplegar paquete de componentes

## Inicio
  - Iniciamos dejando el componente lo mas pulido posible
  - s



  -- Creando proyecto de TSDX
    - Crear un nuevo Proyecto que tenga SOLO lo q queremos desplegar a NPM
      - s
    - Para ver la estructura q nos pide NPM basta con ver el github de un paquete de npm
      - 

    - Paso #1: Crear paquete
        npx tsdx create <packageName>
          - instalamos tsdx - y
          - template: react
      - Crea un proyecto cascaron para subir a NPM



  -- Estructura del proyecto - TSDX - NPM
    - peerDependencies: Dependencias que nuestro paquete necesita Obligatoriamente
      "peerDependencies": {
        "react": ">=16"
      },



  -- Paso #2 - Optimizar index.tsx
    - export * from '/path'
    - En el index va solo la informacion que esponemos al exterior - components
          export * from './components';


  
  -- Paso #3 - ( Opcional ) Modulos
    - Para poder utilizar modulos de CSS e imagenes
    - Instalamos:
        npm i -D rollup-plugin-postcss
        npm i -D -D @rollup/plugin-image
    - Creamos el: Y establecemos la configuracion
      - tsdx.config.js



  -- Paso #4 - Build
    - Crea los archivos q la gente termina utilizando en sus proyectos
    - Todos los   *.d.ts  los creo tsdx 
      - Para que suceda esto los archivos deben ser  .ts/.tsdx
      - Incluso las  Interfaces  deben ser .ts   <-  Si no NO se van a crear
    - Si quieres q esto tenga soporte a JS deberian crear los   Proptypes  de React
      - Como solo quiero soporte total  a TS no lo vamos a hacer
    
  -- Paso #5: Example
    - Creamos el ejemplo q servira de guia para los devs q utilicen nuestro HOC
    


  -- Paso #6: GitHub Repo
    - s



  -- Paso #7: Pruebas automaticas
      npm i -D jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
      npm i @types/react @types/react-dom @types/react-test-renderer 

  

  -- Paso #8: Publicar
    - Seguro del Nombre del Paquete xq no lo vas a poder Eliminar ni Renombrar
      - SI eliminas, solo pierdes control del mismo, but NPM lo mantiene
    - Creamos una cuenta en  NPM
    - npm login
    - Creamos el TAG de nuestro code en git/github
        git tag -a v0.0.1 -m 'Version 0.0.1 completed'
    - push a github
    - npm publish



  -- Nueva versión de nuestro paquete de NPM
    - Subir el  numero de version en el   package.json
        "version": "1.0.0-rc",
       -rc <-  release candidate 
    - npm publish