// https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/


let vitamins = [
    {
        name: 'C',
        food: `Red Pepper (Raw ½ Cup): 95mg <br>
        Orange (Medium): 70mg <br>
        Kiwi (Medium): 64mg <br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
                <strong>Vegetables:</strong><br>
                Green Pepper (Raw ½ cup): 60mg <br>
                Broccoli (Cooked ½ cup): 51mg <br>
                Brussels Sprouts (Cooked ½ cup): 48mg <br>
                <strong>Fruits:</strong><br>
                Strawberries (½ cup): 49mg <br>
                Grapefruit (½ medium): 39mg <br>
                Tomato (Raw 1 medium): 17mg <br>

            </div>
        </div>
    </div>
        
        `,

        benefits: `Antioxidant, Immune Function, Iron Absorption`,
        perDay: `Male: 90mg <br> Female: 75mg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/" target="_blank">National Institute of Health</a>`,
    },

    {
        name: 'D',
        food: `Fortified Milk (1 cup) 120 IU <br>
        Salmon (3.5 ounces) 526 IU<br>
        Egg Yolk (1): 37 IU <br>
        
        `,

        benefits: `Calcium Absorption, Immune Health, Muscle & Nerve Health`,
        perDay: `600 IU`,
        source: `<a href="https://ods.od.nih.gov/factsheets/VitaminD-Consumer/" target="_blank">National Institute of Health</a>`,
    },
    {
        name: 'B12',
        food: `Clams (Cooked 3 ounces): 84.1 mcg <br>
        Lean Beef (Cooked 3 ounces): 6.9 mcg <br>
        Milk (1 cup): 1.2 mcg <br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Beef Liver (Cooked 3 ounces): 70.7 mcg<br>
            Muscles (Steamed 3 ounces): 20.4 mcg<br>
            King Crab (Steamed 3 ounces): 9.8 mcg<br>
            Salmon (Cooked 3 ounces): 2.4 mcg<br>
                Yogurt (8 ounces): 1.2 mcg<br>
                Swiss Cheese (1 ounce): .9 mcg<br>



            </div>
        </div>
    </div>
        
        `,

        benefits: `Blood & Nerve Cell Health, Helps Make DNA`,
        perDay: `2.4 mcg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/VitaminB12-Consumer/" target="_blank">National Institute of Health</a>
        <br>
        <a href="hhttps://www.webmd.com/diet/b12-rich-foods#1" target="_blank">Web MD</a>
        
        `,
    },
    {
        name: 'B6',
        food: `Chickpeas (1 cup): 1.1 mg <br>
        Beef Liver (Pan fried 3 ounces): .9 mg <br>
        Tuna (Cooked 3 ounces): .9 mg <br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Salmon (Cooked 3 ounces): .6 mg<br>
            Chicken Breast (Roasted 3 ounces): .5 mg<br>
            Potatoes (Boiled 1 cup): .4 mg<br>
            Turkey (Roasted 3 ounces): .4 mg<br>
                Banana (Medium 1): .4 mg<br>
                Squash (Baked ½ cup): .2 <br>



            </div>
        </div>
    </div>
        
        `,

        benefits: `Metabolism, Immune Health, Brain Development`,
        perDay: `1.3 - 1.7 mg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/" target="_blank">National Institute of Health</a>

        
        `,
    },
    {
        name: 'A',
        food: `Sweet Potato (Baked in skin 1): 1,403 mcg <br>
        Spinach (Boiled ½ cup): 573 mcg <br>
        Ricotta Cheese (1 cup): 263 mcg <br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Beef Liver (Pan fried 3 ounces): 6,582 mcg<br>
            Carrots (Raw ½ cup): 459 mcg<br>
            Cantaloupe (Raw ½ cup): 135 mcg<br>
            Peppers (Red raw ½ cup): 117 mcg<br>
            Mango (Raw 1): 112 mcg<br>
            Egg (Hard boiled 1): 75 mcg<br>



            </div>
        </div>
    </div>
        
        `,

        benefits: `Vision, Immune Health, Reproduction, Cellular Communication`,
        perDay: `Male: 900 mcg<br>
         Female: 700 mcg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/" target="_blank">National Institute of Health</a>

        
        `,
    },
    {
        name: 'E',
        food: `Wheat Germ Oil (1 tbs): 20.3 mg<br>
        Sunflower Seeds (Roasted 1 ounce): 7.4 mg<br>
        Almonds (Roasted 1 ounce): 6.8 mg<br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Sunflower Oil (1 tbs): 5.6 mg<br>
            Hazelnuts (Roasted 1 ounce): 4.3 mg<br>
            Peanut Butter (2 tbs): 2.9 mg<br>
            Peanuts (Roasted 1 ounce): 2.2 mg<br>
            Spinach (Boiled ½ cup): 1.9 mg <br>
            Broccoli (Boiled ½ cup): 1.2 mg<br>
            Kiwi (Medium 1): 1.1 mg<br>
            Mango (Sliced ½ cup): .7 mg<br>



            </div>
        </div>
    </div>
        
        `,

        benefits: `Antioxidant, Immune Health, Metabolism, Cell Proliferation/Regulation/Signaling`,
        perDay: `15 mg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/" target="_blank">National Institute of Health</a>

        
        `,
    },
    {
        name: 'B1',
        food: `Wheat Germ Oil (1 tbs): 20.3 mg<br>
        Sunflower Seeds (Roasted 1 ounce): 7.4 mg<br>
        Almonds (Roasted 1 ounce): 6.8 mg<br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Sunflower Oil (1 tbs): 5.6 mg<br>
            Hazelnuts (Roasted 1 ounce): 4.3 mg<br>
            Peanut Butter (2 tbs): 2.9 mg<br>
            Peanuts (Roasted 1 ounce): 2.2 mg<br>
            Spinach (Boiled ½ cup): 1.9 mg <br>
            Broccoli (Boiled ½ cup): 1.2 mg<br>
            Kiwi (Medium 1): 1.1 mg<br>
            Mango (Sliced ½ cup): .7 mg<br>



            </div>
        </div>
    </div>
        
        `,

        benefits: `Antioxidant, Immune Health, Metabolism, Cell Proliferation/Regulation/Signaling`,
        perDay: `15 mg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/" target="_blank">National Institute of Health</a>

        
        `,
    },
    {
        name: 'B2',
        food: `Oats (Instant 1 cup): 1.1 mg<br>
        Yogurt (Plain 1 cup): .6 mg<br>
        Milk (2% 1 cup): .5 mg<br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Beef (Tenderloin steak 3 ounces): .4 mg<br>
            Clams (Cooked 3 ounces): .4 mg<br>
            Mushrooms (Portabella grilled ½ cup): .3 mg <br>
            Almonds (Roasted 1 ounce): .3 mg<br>
            Cheese (Swiss 3 ounces): .3 mg <br>




            </div>
        </div>
    </div>
        
        `,

        benefits: `Energy Production, Cellular Growth, Function, & Development`,
        perDay: `1.3 mg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/Riboflavin-HealthProfessional/" target="_blank">National Institute of Health</a>

        
        `,
    },
    {
        name: 'B3',
        food: `Chicken breast (Grilled 3 ounces): 10.3 mg<br>
        Marinara Sauce (1 cup): 10.3 mg<br>
        Turkey breast (3 ounces): 10 mg<br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Salmon (Cooked 3 ounces): 8.6 mg<br>
            Tuna (Light, canned, drained 3 ounces): 8.6 mg<br>
            Pork (Tenderloin roasted 3 ounces): 6.3 mg<br>
            Beef (Ground 3 ounces): 5.8 mg<br>
            Rice (Brown 1 cup): 5.2 mg <br>
            Peanuts (Roasted 1 ounce): 4.2 mg <br>
            Potato (Russet baked 1 medium): 2.3 mg <br>
            Banana (1 medium) .8 mg<br>
            Edamame (Frozen ½ cup): .7 mg <br>




            </div>
        </div>
    </div>
        
        `,

        benefits: `Cellular Communication, Energy Conversion`,
        perDay: `Male: 16 mg <br>
        Female: 14 mg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/Niacin-HealthProfessional/" target="_blank">National Institute of Health</a>

        
        `,
    },
    {
        name: 'K',
        food: `Collards (Boiled ½ cup): 530 mcg<br>
        Turnip Greens (Boiled ½ cup): 426 mcg<br>
        Spinach (Raw 1 cup): 145 mcg<br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Kale (Raw 1 cup): 113 mcg<br>
            Broccoli (Boiled ½ cup): 110 mcg<br>
            Soybeans (Roasted ½ cup): 43 mcg<br>
            Edamame (½ cup): 21 mcg<br>
            Blueberries (Raw ½ cup): 14 mcg<br>





            </div>
        </div>
    </div>
        
        `,
        
        benefits: `Healthy Bones, Blood Clotting`,
        perDay: `Male: 120 mcg <br>
        Female: 90 mcg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/" target="_blank">National Institute of Health</a>

        
        `,
    },
    {
        name: 'FOLATE',
        food: `Spinach (Boiled ½ cup): 131 mcg <br>
        Black eyed peas (Boiled ½ cup): 131 mcg<br>
        Rice (White cooked ½ cup):  90 mcg<br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Asparagus (Boiled 4 spears): 89 mcg<br>
            Brussels Sprouts (Boiled ½ cup): 78 mcg<br>
            Spaghetti (Cooked ½ cup): 74 mcg<br>
            Lettuce (Romaine 1 cup): 64 mcg<br>
            Avocado (Raw ½ cup): 59 mcg<br>





            </div>
        </div>
    </div>
        
        `,

        benefits: `DNA Creation, Cell Division`,
        perDay: `400 mcg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/" target="_blank">National Institute of Health</a>

        
        `,
    },

    {
        name: 'B5',
        food: `Shitake mushrooms (Cooked ½ cup): 2.6 mg<br>
        Sunflower Seeds (¼ Cup): 2.4 mg<br>
        Chicken breast (Skinless, roasted 3 ounces): 1.3 mg<br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Tuna (Cooked 3 ounces): 1.2 mg<br>
            Avocados (Raw ½): 1 mg <br>
            Milk (2% 1 cup): .9 mg<br>
            Mushrooms (White stir fried ½ cup): .8 mg<br>
            Potatoes (Russet baked 1 medium): .7 mg<br>





            </div>
        </div>
    </div>
        
        `,

        benefits: `Energy Production, Breaking Down Fats`,
        perDay: `5 mg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/PantothenicAcid-HealthProfessional/" target="_blank">National Institute of Health</a>

        
        `,
    },

    {
        name: 'BIOTIN',
        food: `Egg (Cooked 1): 10 mcg<br>
        Salmon (3 ounces): 5 mcg<br>
        Pork Chop (3 ounces): 3.8 mcg<br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Sunflower Seeds (Roasted ¼ cup): 2.6 mcg <br>
            Sweet Potato (Cooked ½ cup): 2.4 mcg<br>
            Almonds (Roasted ¼ cup): 1.5 mcg <br>






            </div>
        </div>
    </div>
        
        `,

        benefits: `Turns Food into Energy, Gene Regulation`,
        perDay: `30 mcg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/Biotin-HealthProfessional/" target="_blank">National Institute of Health</a>

        
        `,
    },

    {
        name: 'CHOLINE',
        food: `Beef (3 ounces): 117 mg<br>
        Egg (Hard boiled 1 large): 147 mg<br>
        Soybeans (Roasted ½ cup): 107 mg<br>

        <div class="box">
            <a class="button" href="#popup1">More</a>
        </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">

            <a class="close" href="#">&times;</a>
            <div class="popup-content">
            Chicken breast (Roasted 3 ounces): 72 mg <br>
            Cod (Cooked 3 ounces): 71 mg<br>
            Potatoes (Red baked 1 large): 57 mg<br>






            </div>
        </div>
    </div>
        
        `,

        benefits: `Regulate Memory, Mood, & Muscle Control`,
        perDay: `Male: 550 mg <br>
        Female: 425 mg`,
        source: `<a href="https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/" target="_blank">National Institute of Health</a>

        
        `,
    },

]






