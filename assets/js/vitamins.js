


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
                Green Pepper (Raw ½ cup): 60mg <br>
                Broccoli (Cooked ½ cup): 51mg <br>
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
        food: 'Fish',
        benefits: `Healthy Immune System, healthy skin <br> something else, something else`,
        perDay: '5000 iu',
        source: `<a href="" target="_blank"></a>`,
    },

]





//Can add another property with a link to the scientific journal source
//can add a more... link under the food list that displays a popup or modal window with a longer list of foods. Limit displayed food to 3