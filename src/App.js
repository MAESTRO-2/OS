import {  Box, Button, Card, CardContent, createTheme, CssBaseline, Divider, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import NavBar from './NavBar';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import logo from './img/logo.png'
import bc from './img/bc.jpg'
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Conect from './Conect';
import Info from './Info';
import Start from './Start';
import LooksOneSharpIcon from '@mui/icons-material/LooksOneSharp';
import LooksTwoSharpIcon from '@mui/icons-material/LooksTwoSharp';
import Looks3SharpIcon from '@mui/icons-material/Looks3Sharp';
import Looks4SharpIcon from '@mui/icons-material/Looks4Sharp';

export const theme = createTheme({ /*font-family: 'Lemonada', cursive */
button: {
    "fontFamily": `Noto Kufi Arabic', sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
})
function App() {
 
  return (
  <>
  
  <NavBar/>
    <CssBaseline />
    <Container  maxWidth="xl" sx={{marginTop:'5rem',
    background:'bc'
    }} >
        <Box  sx={{maxWidth:'90rem',   }}>
          <img src='https://th.bing.com/th/id/R.7d24e51b1499d42110cb5cae7e275b9f?rik=ZZF2U8LS%2bW30vA&riu=http%3a%2f%2fsahinyavuz.av.tr%2fwp-content%2fuploads%2f2017%2f11%2flaw-background.jpg&ehk=mLe%2b5mFdx8y%2fbXY%2fby7iIiXuQ%2fjtj%2b2TrA4tywqlFzs%3d&risl=&pid=ImgRaw&r=0' alt=""
           style={{ width:'100%', maxHeight:'40rem', minHeight:'15rem' }}/>
           </Box>

          <Box sx={{position: 'absolute',
           left:{sm:'5%', xs:''},
           bottom: {sm:'40%', xs:'65%'},
           fontSize:{sm:'40px'}
           }}>

          <h2> احصل على استشارتك </h2>
          <h1 style={{color:'blue', marginTop:'-12%', marginLeft:'5%'}}> القانونية الان </h1>

          <Box sx={{position: 'absolute',
           left:{sm:'20%', xs:''},
           bottom: {sm:'1%', xs:'-50%'},
           fontSize:{sm:'40px'},
           display:{sm:'flex'}
           }}>
            <Box sx={{marginRight:'5px'}}><Conect/></Box> 
            <Info/>
          </Box>
          </Box>
          <Box sx={{textAlign:'right', marginTop:'10px',display:{sm:'flex', xs:'block'}, maxHeight:'35rem',  }}> 
          <Box sx={{ maxWidth:'100%',margin:'auto', marginRight:'1rem'}}>
           <h2 >
           : الأعمال العقارية 
       

           </h2>
           <h5 > 
           افراز وازالة الشيوع
           <LooksOneSharpIcon color='primary' sx={{marginBottom:'-5px'}}/>
           <br/><br/>
           الانتقال
           <LooksTwoSharpIcon color='primary' sx={{marginBottom:'-5px'}}/>
           <br/><br/>
           وضع اشارة و ترقين اشارة
           <Looks3SharpIcon color='primary' sx={{marginBottom:'-5px'}}/>
           <br/><br/>
           وجميع الأعمال العقارية التي تتضمن دوائر مالية ودوائر المصالح العقارية
          </h5>
          </Box>
        <Box sx={{width:'25rem', maxWidth:'100%',margin:'auto', height:'20rem'}}>  
         <Card sx={{maxHeight:'20rem'}}>
           <CardContent >
               <h2  style={{color:'blue'}}>:أعمالنا في المحكمة الشرعية </h2> 
              
                <h5> 
                  حصر الارث وحساب المسألة الارثية 
                  <LooksOneSharpIcon  sx={{textColor:'black', marginBottom:'-5px'}}/>
                  <br/><br/>
                  تثبيت الزواج في المحكمة 
                  <LooksTwoSharpIcon sx={{marginBottom:'-5px'}}/>

                  <br/><br/>
                  وصاية شرعية
                  <Looks3SharpIcon sx={{marginBottom:'-5px'}}/>

                  <br/><br/>
                  مخالعة وطلاق
                  <Looks4SharpIcon sx={{marginBottom:'-5px'}}/>

                  <br/><br/>

          
               </h5>

               <img src={logo} alt='' style={{width:'50px',float:'left', marginLeft:'-15px', marginTop:'-2rem' }}/>
            </CardContent>
           </Card>
        </Box>   
      </Box>







           <Box >
            <Box sx={{textAlign:'center', marginTop:'3rem'}} >
              <Divider >
                 <h2  style={{display:'inline-block', color:'blue',  marginTop:{sm:'-5rem', xs:''}}}>
              
               3-2-1 
             </h2>
             <h2 style={{display:'inline-block', marginTop:{sm:'-5rem', xs:''}}}>
               انها بسيطة مثل 
               </h2>

               <h5 style={{marginTop:'-1rem', wordWrap:'break-word'}}>
             حسم جميع المعاملات التي يتم اخذها من قبلنا<br/> 
                 من خلال الخطوات التالية   
               </h5>
            </Divider>
             </Box>
           </Box>

           <Box sx={{display:{sm:'flex', xs:'block'}, textAlign:'center' }}>
            <Card sx={{maxWidth:'17rem',marginBottom:{xs:'1rem'}, margin:'auto'}}>
              <CardContent>
                <Filter1Icon color="primary" sx={{float:'right'}} />
               
                <h2> اعطنا المعلومات </h2>

                 <p>قم باعطائنا المعلومات المطلوبة والكافية التي سنستخمها في المحكمة
                 </p>
           
              </CardContent>
            </Card>
            <Card sx={{maxWidth:'17rem',marginBottom:{xs:'1rem'}, margin:'auto'}}>
              <CardContent>
                <Filter2Icon color="primary" sx={{float:'right'}} />
                <h2>    تكلم معنا عن التفاصيل </h2>   
                <p> التفاصيل هي جزء مهم من المحكمة مع بعض الوقت نستطيعالعمل على المرافعة </p>
              </CardContent>
            </Card>
            <Card sx={{maxWidth:'17rem',marginBottom:{xs:'1rem'}, margin:'auto'}}>
              <CardContent>
                <Filter3Icon color="primary" sx={{float:'right'}} />
                <h2>    ربح الجلسة باسرع وقت </h2>               
                <p>  بعد عطائنا الوقت الكافي والتفاصيل المطلوبة يتم ذلك بطريفة احترافية </p> 
              </CardContent>
            </Card>
           </Box>

           <Box textAlign='center' sx={{margin:' 2rem 0 2rem 0 '}} >
           <Button sx={{width:'17rem', color:'black', position:'center'}} > 
           <Start/>
           </Button>
           </Box>
      </Container>
      
  </>
  );
}

export default App;