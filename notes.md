# Compound Component Pattern - Extensible Styles

## Inicio
  - Extensible Style Pattern
    - Poder pasar styles personalizados a nuestros componentes prefabricado
      - Estos componentes prefabridacos puedan interpretar esos styles
      
    - Deberemos permitir al consumidor poder aplicar     className={}   &   styles={{}}     a cualquiera de los children



### Custom className
  - Para que el Componente con el CCP (compound component pattern) acepte la clases debemos especificar en las    interfaces   q va a recibir un   className: string  
  - En los children lo destructuring y lo agregamos en   className={}  propio
    - Asi se facil podemos pasar Clases de CSS a los HOCs
  - s


  -- React CSSProperties
    - 