import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


SplashScreen.preventAutoHideAsync();


export default function Splash() {
  const router = useRouter();
  
  const [loaded, error] = useFonts({
  SpaceGroteskMedium: require("../fonts/SpaceGrotesk-Medium.ttf"),
  SpaceGroteskSemiBold: require("../fonts/SpaceGrotesk-SemiBold.ttf"),
  SpaceGroteskBold: require("../fonts/SpaceGrotesk-Bold.ttf"),
 });

 useEffect(() => {
   if (loaded || error) {
     SplashScreen.hideAsync();
   }
 }, [loaded, error]);

 useEffect(()=> {
  if (loaded || error){
    setTimeout(()=> {
      router.replace("Welcome");
    }, 3000);
  }
 },[loaded, error, router]);

 if (!loaded && !error) {
   return null;
 }

 return (
  <ImageBackground
    source={require('../assets/images/newai.png')}
    style={{flex:1,justifyContent:'center', alignItems:'center'}}
  >
    <LinearGradient
      colors={["rgba(0,85,0,0.95)","rgba(0,85,0,0.95)"]}
      style={{
        position:'absolute',
        bottom:0,
       width:'100%',
        height: '100%',
      }}

      start= {{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
    />

    <View onLayout={() => SplashScreen.hideAsync()}>
      <Text style={{color: 'white' ,fontSize: 24, fontWeight: 'bold', textTransform:'uppercase'}}>Stack News</Text>
    </View>
  </ImageBackground>
 )
}
