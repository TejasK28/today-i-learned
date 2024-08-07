import './style.css'
import { useState } from 'react';

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];


function Counter()
{

  const [count, setCount] = useState(0, function(){
    count = count + 1;
  });

  return <div>
    <span style={{paddingRight:'10px', fontSize:'40px'}}>{count}</span>
    <button className='btn btn-large' onClick={() => setCount((c) => c+1)}>+1</button>
  </div>
}


function App(){

  const AppTitle = "Today I learned";

  return (
    <>
    {/* HEADER */}
    <header className="header">
        <div className="logo">
            <img src="logo.png" height="68" width="68" alt="logo"/>
            <h1>{AppTitle}</h1>
        </div>
        <button className="share-a-fact-btn">Share a fact</button>
    </header>


    {/* NEW FACT FORM */}
    <NewFactForm />

    <main className="main">

    {/* CATEGORY */}
    <CategoryFilter />
    {/* FACT LIST */}
    <FactList />

    </main>

    
    </>
    );
}

function NewFactForm()
{
  const [input, setInput] = useState("");
  const [source, setSource] = useState("");
  const [cat, setCat] = useState("");

  function handlePost(e)
  {
    e.preventDefault();
    console.log("Form Submitted");
  }
  

  return <form className="fact-form" onSubmit={handlePost}>

        <input maxLength={200} type="text" placeholder="Share a fact with the world" value={input} onChange={(e) => setInput(e.target.value)}/>
        <span>{200 - input.length}</span>
        <input type="text" placeholder="Trustworthy source..." value={source} onChange={(e) => setSource(e.target.value)}/>

        <select value = {cat} onChange={(e)=>setCat(e.target.value)}>
            <option value="">Choose category:</option>
            {CATEGORIES.map((cat) => (<option key= {cat.name} value={cat.name}>{cat.name.toUpperCase()}</option>))}
        </select>


        <button className="post-btn" >Post</button>
  </form>
}

function CategoryFilter()
{
return (
<aside>
  <ul>
  <li className="cat">
                    <button className="btn btn-large btn-all">All</button>
                </li>

  {CATEGORIES.map((cat) => 
    <li key={cat.name} className='cat'>
      <button className='btn btn-large btn-reg' style={{backgroundColor: cat.color}} >
        {cat.name}
      </button>
    </li>
  )}    
  </ul>
</aside>
)
}

function FactList()
{   
  // Temporary variable
  var facts = initialFacts;

  return( 
  
  <section>

        <ul className="fact-list">
        {facts.map((fact) => (< Fact key={fact.id} fact={fact}/>))}

        <p>There are {facts.length} facts in our database!</p>
        </ul>

    </section>

    );
    
}

function Fact({fact})
{

  return (<li className="fact" >
  <p>
      {fact.text}
      <a className="source" href={fact.source} target="_blank" rel="noreferrer">(Source)</a>
      
  </p>

  <span className="tag" style={{backgroundColor:CATEGORIES.find((cat) => cat.name == fact.category).color}}>
      #{fact.category}
  </span>

  <div className="vote-btns">
      <button>👍 {fact.votesInteresting}</button>
      <button>🤯 {fact.votesMindblowing}</button>
      <button>⛔️ {fact.votesFalse}</button>
  </div>
</li>)
}

export default App;