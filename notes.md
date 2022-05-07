# Control Props Component Pattern

## Inicio
  -- Problema y necesidad del control de propiedades
    - Vamos a trabajar con una estructura a como React W con los inputs:  value - onChange()
      - Esta estrucutra la W todos los Componentes Preconstruidos q podemos descargar de npm


  -- Estado del carrito de compras
    - Con un  useState  q acepte x cantidad de productos
      - Type de esto:   [key: string]: ProductInCart;


  -- Disparar f(x) personalizar al cambiar el State
    - Establecemos q el Component va a emitir un  Evento  en las  Props
      - En este caso el onChange
          onChange?: () => void;
    - Se lo pasamos al State: Se puede pasar como Arg al  useState
          const { counter, increaseBy } = useProduct(onChange);
    - En el  useProduct lo recimos en las Props
      - En este caso lo  disparamos  cuando cambia el  state
        - Debemos verificar q venga, solo si viene lo ejecutamos
          onChange && onChange();


  -- Pasar Data de HIJOS a PADRES - onChange y sus Args
    - Los Args q emite el onChange cuando se dispara con Data del Provider del Hijo
    - El Padre o HOC esta recuperando el State del hijo - wow?
    - NO SE si esto aplique a otras cosas, pero aqui es necesario xq es un evento
    // TODO: Aplicar una f(x) q como Arg reciba el  setPatients  del PatientProvider y en el AuthProvider al hacer logOut limpie el state - RESUELTO - Ya no solo dependera del refresh - Proyecto APV Juan de la torre

  -- Emitir argumentos en nuestro evento
    - El evento  onChange q definimos recibe argumnetos, como los recibe y uso la sitaxis corta, se los pasa de una a la funcion
      - Es lo timpico q una f(x) pasa lo q recibe de inmediato:
        - Como  onChange  es el evento q recive y emite  onChangeArgs  se lo puedo pasar de inmediato al handler cuando el evento onChange se dispara.
        - Es como en Vanilla JS, tenemos un evento q esta estuchando, cuando se dispara el evento, genera un Obj e que se le pasa al handler.
        - Aqui hacemos lo mismo, tenemos el evento   onChange   q se  dispara  cuando ejecutamos el increaseBy y cambia el state. Cuando se dispara este evento onChange emite sus Args { count: newValue, product }. Y por eso, en el ShoppingPage podemos pasarle esos args q emite, al dispararse el evento en el useProducts, al handler onProductCountChange y este hanlder como en vanilla js los recibe y puede trabajar con ellos.
          - Como en vanilla JS el handler recibe el Event Object cuando se Dispara el Evento q estamos escuchando.
          - Solo q aqui debemos establecer como viaja la info de modulo a modulo.

      ```js
          onChange={onProductCountChange}
      ```



  -- Mantener sincronizados los valores
    - Permito tener el   value={}  en el HOC para poder tener sincronizados los valores.
    - Como con el  evento   onChange  emito/recupero el   state del useProduct (counter)  ya lo tengo en el Shopping Page [Lo explicado en el paso anterior]. Entonces, como tengo este Current State, es este Counter el q le paso al  value={product.counter}
      - Este viaje de nuevo al hook useProduct para estar atento a su cambio con un useEffect()
      - Y este cambia con cada clic xq es el     { count: newValue, product }    , y como cambia con cada click
        - se hace el setCounter(value)  y  ese es el q se refleja en cada hijo ,x eso etan vinculados

    - Se hace tantas vueltas xq los Hooks W de manera AISLADA. Por lo cual, solo los componentes en lo que se lo utilice tendra el stado actual.
      - En este caso, como es en el de Buttons pues, cada uno es independiente, por eso, si en esa card se incrementa el counter, solo se refleja en ese componente.
      - Para poder subsanar esto, debemos recuperar este estado actual (onClick) y crear una variable con ese valor (value={}) para pasarselo a todos los hijos. 
        - Los hijos q usen el hook enviaran este value al useProduct para que este pendiente del cambio de este value, asi cuando cambie, simplemente se actualiza la interfaz.
        - y lo hace para todos lo q envien ese value, todos los que envien ese value estaran vinculados.



  -- Control Props
    - En el  useProduct verificamos si el Component esta sindo controlado por el user:
          const isControlled = useRef(!!onChange);

      - Le damos el control del state al user en el ShoppingPage
        - Asi, dependiendo de si existe el  onChange y Value?  sabremos q el user es el q quiere tener el control.
        - Pero si no tiene estas propiedades, no solo NO tendra el control, sino q tampoco tendra la sincronizacion entre las cards en ambas direcciones.
          - La sincronia solo existira para el Card q tenga el  value={}
          - Si no tiene el value no haria falta reaccionar en el del cart al onChange?
            - Solo en el card principal
