# State initializer + Function Child = Render Props - Formik implementation

## Inicio
  - El HOC retorna una FUNCION como Hijo en lugar de retornar JSX/Grupo de Children
    - Esta f(x) retorna JSX
    - Como es una f(x), el children()  se debe ejecutar
  - Esto da mucha flexibilidad al HOC  
  - Debe tener 2 cosas:
    - Forma de establecer Valores Iniciales
    - Reset al estado inicial



  -- Implementar la propiedad initialValues
    - Las debe aceptar el HOC en su Interface x TS.
    - EN este caso se lo pasamos al hoo
      - Ahi es donde los utilizamos para aplicar la logica que querramos
        - En este caso, colocar el maximo de productos a comprar


  -- Funcion como hijo de un HOC
    - El  children  ahora es 1 f(x) q retorna JSX
      - Por lo cual debemos Ejecutar el  children()  en el ProductCard.tsx

    - Que ganamos con esto:
      - Poder pasar Argumentos cuando ejecuta el  children(Args)  <- ProductCard.jsx
      - Estos los recivo en la f(x) q retorna JSX en el padre o en donde lo implemente


  -- Exponer funciones y propiedades fuera del componente - HOC
    - Establemos las interfaces para lo que vamos a pasar como argumento y recibir en la pagina en donde estamos renderizando el HOC
    - Los recibimos y hacemos lo que querramos
      - 