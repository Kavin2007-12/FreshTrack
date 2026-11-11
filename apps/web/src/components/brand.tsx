import { Leaf } from 'lucide-react';
export function Brand({dark=false}:{dark?:boolean}) { return <div className="brand" style={{color:dark?'#10372d':'white'}}><span className="brand-mark"><Leaf size={24}/></span><span>FreshTrack<small style={{display:'block',fontFamily:'DM Sans',fontSize:9,fontWeight:500,letterSpacing:'.08em',marginTop:-3}}>TRACK · RESEARCH · PRESERVE</small></span></div>; }
