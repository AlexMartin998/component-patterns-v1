# Compound Component Pattern - Primeros pasos

## Inicio
  - Compound Component Pattern - Primeros pasos
    - Busca tener un Componente Padre y q internamente se definan los Componentes Hijos
      - Separar en FC cada parte de un FC padre
      - Como el    <select><option></option></select>   de html



  - Compound Component Pattern - Segundo Paso
    - Hacer q un FC sea un  HOC (Higer Order Component)
      - Debe haceptar  children:
      - Y ya, ahora solo se encapsula los children con este HOC
      ```js
        export const ProductCard = ({ children, product }: Props) => {......}
      ```



  - Unificar exportacion de componentes
    - Le damos el poder a los desarrolladores de agregar cosas a nuestro HOC sin necesidad de ir al codigo interno del mismo y modificar algo. Solo con agregar elementos/children basta
    - Como en JS todo es un Obj menos los prinitivos, al FC podemos agregarle methods y properties, por lo cual, agregamos para usarlo de esta manera:
      - Despues de la exportacion del FC
    ```js
      // Agregamos:
      ProductCard.Title = ProductTitle;
      ProductCard.Image = ProductImg;

      // Consumimos:
      <ProductCard product={product}>
        <ProductCard.Image />
      </ProductCard>
    ```



  - Compound Component Pattern - Tercer Paso
    - Debemos compartir informacion entre Componentes Padres e Hijos - SIN usar las Props
      - Esto puede hacerce con el   context API   /   Redux
      - Context API
        - Se crea un Context Provider en el q se le pasa todo lo q van a necesitar los children
        - Asi ya no es necesario pasarle nada por props
          - A menos q se quiera sobreescribir algo



  - Separando la lógica en archivos independientes
    - Refactorizar la logica


  - Asignar componentes a otro componente
    - Hacer q funcione lo de .algo en el parent component
      - Se hace agregandolo estos componentes al momento de exportar en el index.tsx
        - Esto NO se puede hacer con un    ...ParentFC    xq necesitamos los setters q crea el Object.assign(), por eso lo utilizamos
    - Este Patron de Componentes es muy bueno, pero aun presenta ciertas limitaciones
      - A la hora de tener tema ligth/dark
      - Tener app por idiomas
      - Para solventar esto, mas adelante se veran otros Patrones de Componentes mas robustos


  -- Hasta este punto nuestros Componentes NO aceptan styles personalizados
    - Para poder solventar esto se aplicara el    Patron Extensible Styles