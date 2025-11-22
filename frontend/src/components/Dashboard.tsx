import RestaurantInput from "./RestaurantInput";
import FoodItemsSection from "./FoodItems";
import AllergyBar from "./AllergyBar";
import { useState } from "react";
import { type MenuItem } from "../utils/api";
import { type Allergy } from "./AllergyList";

interface DashboardProps {
  onNavigateToHistory?: () => void;
}

const Dashboard = ({ onNavigateToHistory }: DashboardProps) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [userAllergies, setUserAllergies] = useState<Allergy[]>([]);

  const [activeMobileTab, setActiveMobileTab] = useState<'menu' | 'allergies'>('menu');

  const transformMenuItems = (items: MenuItem[]) => {
    return items.map((item) => ({
      food: item.item_name,
      confidence: item.confidence_score,
      allergens: item.common_allergens,
    }));
  };

  return (
    <div className="flex flex-col h-auto lg:h-full min-h-0 gap-[1rem]">
      {/* Mobile Tab Toggles */}
      <div className="flex lg:hidden bg-white/50 p-1 rounded-xl backdrop-blur-sm shrink-0">
        <button
          onClick={() => setActiveMobileTab('menu')}
          className={`flex-1 py-2 rounded-lg font-sf-pro font-semibold transition-all ${
            activeMobileTab === 'menu' ? 'bg-white shadow-sm text-black' : 'text-black/50'
          }`}
        >
          Menu
        </button>
        <button
          onClick={() => setActiveMobileTab('allergies')}
          className={`flex-1 py-2 rounded-lg font-sf-pro font-semibold transition-all ${
            activeMobileTab === 'allergies' ? 'bg-white shadow-sm text-black' : 'text-black/50'
          }`}
        >
          My Allergies
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(300px,400px)] gap-[1rem] min-h-0 flex-1">
        <div className={`flex-col gap-[1rem] min-h-0 ${activeMobileTab === 'menu' ? 'flex' : 'hidden lg:flex'}`}>
          <RestaurantInput
            onMenuProcessed={setMenuItems}
            onSeeAllClick={onNavigateToHistory}
          />
          <FoodItemsSection
            items={transformMenuItems(menuItems)}
            allergies={userAllergies}
          />
        </div>
        <div className={`min-h-[300px] lg:h-full ${activeMobileTab === 'allergies' ? 'block' : 'hidden lg:block'}`}>
           <AllergyBar onAllergiesLoaded={setUserAllergies} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
