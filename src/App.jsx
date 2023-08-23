import './App.css'
import { Box, Avatar, Typography, OutlinedInput } from '@mui/material';

export default function App() {
  return (
    <Container>
      <SideNav />
      <Main />
      <Header />
      <Footer />
    </Container>
  )
}
function Container(props){
  return (
    <section className='grid-container'>
      <div className="menu-icon">
        <i className='fas fa-bars header__menu'></i>
      </div>
      {props.children}
    </section>
  )
}
function Header(){
  return(
    <header className="header">
       <nav>
         <ul>
            <a href="#">
              <li>Home</li>
           </a>
             <a href="#">
              <li>relação de amigos</li>
            </a>
             <a href="#">
              <li>sugestões de amizade</li>
            </a>
         </ul>
        </nav>
     </header>
  )
}

function SideNav() {
  return (
    <aside className="sidenav">
    <div className="sidenav__close-icon">
      <i className="fas fa-times sidenav__brand-close"></i>
    </div>
    <div className='relacaoDeAmigos'>
      <h3>Relação de amigos</h3>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/11659494_522718767877146_3963194785315986992_n.jpg' />
<Typography>Matheus Augusto<br />(5 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/332230731_1582088905598294_6116176643468378532_n.jpg' />
<Typography>Alexander Avelar Silveira<br />(10 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/315189812_3293025267621355_8008238188599916251_n.jpg' />
<Typography>Guilherme Duffes <br />(7 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/baixados.png' />
<Typography>Bruna #antiTalarico <br />(50 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/328264875_895195361793408_926055222105426688_n.jpg' />
<Typography>André Selister<br/>(44 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/292590507_114316321336785_2287102105609665183_n.jpg' />
<Typography>Joao Victor Alves <br />(12 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/22886074_108689046567612_7974189345807983169_n.jpg' />
<Typography>Walter Silveira <br />(2 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/243037447_1768013276742483_9085408659313133797_n.jpg' />
<Typography>Fernando Silva <br />(14 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/15747564_1010462105732741_3337880170906100332_n.jpg' />
<Typography>Bruno Pientznauer <br />(17 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/270082993_4603490473109950_1681142530092889196_n.jpg' />
<Typography>Yohan Gimenez <br />(80 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/49204943_1986877511433259_454431832251826176_n.jpg' />
<Typography>Eliel Tavares de Oliveira <br />(76 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/117169823_585330585428119_3147632829126829646_n.jpg' />
<Typography>Victor Marques <br />(11 amigos em comum)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/12274697_135317800166791_2782363193885835017_n.jpg' />
<Typography>Pedro Augusto <br />(9 amigos em comum)</Typography>
</Box>
      <h3>Sugestão de amizade</h3>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/321423756_1292525244866796_2616334345204646912_n.jpg' />
<Typography>Mario Pedro <br />(amigo de André Selizter)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/328627278_870411450958044_4651200546263513597_n.jpg' />
<Typography>Regiz Lima <br />(amigo de Walter Silveira)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/240034073_389377795937368_8635769135414850097_n.jpg' />
<Typography>Sergio Avelar <br />(amigo de Pedro Augusto)</Typography>
</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
<Avatar src='./img/240128909_2182882211864875_5228204212296575476_n.jpg' />
<Typography>Ellon Marinho <br />(amigo de Alexander)</Typography>
</Box>
    </div>
  </aside>
  );
}

function Footer() {
  return (
    <footer className="footer">
    <h1>Minha rede social &copy; 2023</h1>
  </footer>
  );
}

function Main() {
  return (
      <main className="main">
    <div className="main-cards">
      
          <div>
            <Box sx={{ 
            backgroundColor:"#223641",
                    marginBottom: "20px",
                    padding: '24px',
                    width: '60%',
                    height: '50%',
                    marginLeft: '90px'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar src='./img/meme-pra-que-quem-e-o-garoto-das-fotos-e-origem-da-brincadeira-1024x655.png' />
                <Typography>
                  Grupo dos Grupos <br/>24/02/2023
                </Typography>
              </Box>
              <img className="postImg" src="./img/333262063_1678947202521398_6946887320643768091_n.jpg" />
              <Typography variant="h6" sx={{ mt: 1, mb: 0 }}>21 curtidas / 31 compartilhamentos</Typography>
              <OutlinedInput
                placeholder="Insira seu comentário"
                sx={{
                  margin: "8px auto",
                  padding: "0.1px",
                  border: "none",
                  borderRadius: "50px",
                  width: "100%",
                  backgroundColor: "white"
                }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>Comentários</Typography>
              <ul>
                <li className="Feedcomentario">Matheus Fernandes: @Pedro Silva</li>
                <li className="Feedcomentario">Samuel Barbosa Silveira: Muito engraçado kkkk</li>
              </ul>
            </Box>
                </div>
          <div>
            <Box sx={{ 
            backgroundColor:"#223641",
                    marginBottom: "20px",
                    padding: '24px',
                    width: '60%',
                    height: '50%',
                    marginLeft: '90px'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar src='./img/meme-pra-que-quem-e-o-garoto-das-fotos-e-origem-da-brincadeira-1024x655.png' />
                <Typography>
                  Grupo dos Grupos <br/>24/02/2023
                </Typography>
              </Box>
             <img className="postImg" src="./img/332763357_560459776014153_801648549233821950_n.jpg" />
              <Typography variant="h6" sx={{ mt: 1, mb: 0 }}>19 curtidas / 5 compartilhamentos</Typography>
              <OutlinedInput
                placeholder="Insira seu comentário"
                sx={{
                  margin: "8px auto",
                  padding: "0.1px",
                  border: "none",
                  borderRadius: "50px",
                  width: "100%",
                  backgroundColor: "white"
                }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>Comentários</Typography>
          <ul>
        <li className="Feedcomentario">Walter Silveira: não entendi nada kkkkkkkkk</li>
        <li className="Feedcomentario">Discoink: Muita verdade em pouca imagem.</li>
          </ul>
            </Box>
                </div>

                <div>
            <Box sx={{ 
            backgroundColor:"#223641",
                    marginBottom: "20px",
                    padding: '24px',
                    width: '60%',
                    height: '50%',
                    marginLeft: '90px'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar src='./img/meme-pra-que-quem-e-o-garoto-das-fotos-e-origem-da-brincadeira-1024x655.png' />
                <Typography>
                  Grupo dos Grupos<br/>24/02/2023
                </Typography>
              </Box>
             <img className="postImg" src="./img/331991850_1213537629550467_2964262003050518551_n.jpg" />
              <Typography variant="h6" sx={{ mt: 1, mb: 0 }}>7 curtidas / 19 compartilhamentos</Typography>
              <OutlinedInput
                placeholder="Insira seu comentário"
                sx={{
                  margin: "8px auto",
                  padding: "0.1px",
                  border: "none",
                  borderRadius: "50px",
                  width: "100%",
                  backgroundColor: "white"
                }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>Comentários</Typography>
          <ul>
        <li className="Feedcomentario">Matheus Augusto: Não pesquisem, vcs foram avisados!</li>
        <li className="Feedcomentario">Bruna:Que nojo.</li>
          </ul>
            </Box>
                </div>
    </div>
  </main>
  );
}