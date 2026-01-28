import Candle from "@/components/Candle";
import Cross from "@/components/Cross";
import Divider from "@/components/Divider";
import CondolenceForm from "@/components/CondolenceForm";
import petraImage from "@/assets/petra-heider.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header with decorative element */}
        <Divider className="mb-6" />
        
        {/* Name and dates */}
        <header className="text-center mb-10">
          <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground tracking-wide mb-2">
            Dr. Petra Heider
          </h1>
          <p className="font-heading text-lg text-muted-foreground italic">
            * 21.07.1959 † 23.01.2026
          </p>
        </header>
        
        {/* Main memorial section with aligned images */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-10">
          {/* Cross */}
          <div className="flex-shrink-0">
            <Cross size={100} className="opacity-80" />
          </div>
          
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="photo-frame">
              <img
                src={petraImage}
                alt="Dr. Petra Heider"
                className="w-32 h-40 md:w-40 md:h-52 object-cover"
              />
            </div>
          </div>
          
          {/* Candle */}
          <div className="flex-shrink-0">
            <Candle />
          </div>
        </div>
        
        {/* Quote section */}
        <div className="memorial-card p-6 md:p-8 mb-8 text-center">
          <p className="memorial-quote text-xl md:text-2xl leading-relaxed mb-4">
            Wo Liebe verweilt, endet nichts.
          </p>
          <p className="memorial-quote text-base md:text-lg">
            Ihr Licht begleitet uns – still und ewig spürbar im Herzen.
          </p>
        </div>
        
        {/* Condolence form */}
        <div className="memorial-card p-6 md:p-8 mb-8">
          <h2 className="font-heading text-2xl md:text-3xl text-center text-foreground mb-6">
            Gedenken & Kondolenz
          </h2>
          <CondolenceForm />
        </div>
        
        {/* Footer */}
        <footer className="text-center">
          <Divider className="mb-4" />
          <p className="font-heading text-sm italic text-muted-foreground">
            Immer in unseren Gedanken.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
