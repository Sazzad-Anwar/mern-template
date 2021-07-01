// use this hook to make a delay after input search on onChange event

import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}

export default useDebounce;

// Usage of this functionality
// const App = () => {

//     // const [count, setCounter] = useState(0);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [results, setResults] = useState();
//     const [isSearching, setIsSearching] = useState(false);
//     const debouncedSearchTerm = useDebounce(searchTerm, 1000);

//     async function searchCharacters(search) {
//       try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${search}`);
//         let data = res.json();
//         return data;
//       } catch (error) {
//         console.log(error.response);
//       }

//     }

//     console.log(debouncedSearchTerm);

//     // Effect for API call
//     useEffect(
//       () => {
//         if (debouncedSearchTerm) {
//           setIsSearching(true);
//           const getResult = async () => {
//             try {
//               let result = await searchCharacters(debouncedSearchTerm);
//               setIsSearching(false);
//               setResults(result);
//             } catch (error) {
//               console.log(error.response);
//             }
//           }
//           getResult();

//         } else {
//           setResults();
//           setIsSearching(false);
//         }
//       },
//       [debouncedSearchTerm] // Only call effect if debounced search term changes
//     );

//     return (
//       <div>
//         <input
//           placeholder="Search Marvel Comics"
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         {isSearching && <div>Searching ...</div>}
//         {results && (
//           <div key={results.id}>
//             <h4>{results.title}</h4>
//             <img
//               src={`${results.thumbnailUrl}`}
//               alt="images"
//             />
//           </div>
//         )}
//       </div>
//     )
//   }

//   export default App;
