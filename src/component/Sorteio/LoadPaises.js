const[paises, setPaises] = useState([]);

      useEffect(()=> {
         function loadPaises(){
                const resposta = api 
                const respostapaises = resposta.Result;
                setPaises(respostapaises);
        }
        loadPaises();
      },[])