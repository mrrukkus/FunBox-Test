Тестовое задание для вакансии junior Frontend-разработчик в FunBox.

Выполнено с использованием ReactJS/Redux и TypeScript.

Работа проверена в Chrome, Firefox, Safari, IE11.

В проекте создан store с помощью redux, в котором хранятся объекты товаров, необходимых для рендера, которые в свою очередь хранятся в моковых данных в папке mocks, а также добавляются товары в поле chosenProducts, которые выбирает клиент (подобие корзины). Т.к. не было уточнения по поводу логики отображения надписей под карточками, их рендер был сделан в случайном порядке при каждом рендере карточки (при каждом клике).

_____________________________________________________________________
В данной части я отвечу на вопросы из первой части тестового задания.

Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:

- пользователя;
- менеджера проекта;
- дизайнера;
- верстальщика;
- клиентского программиста;
- серверного программиста.

A1 На мой взгляд хорошая верстка отличается от плохой с точки зрения:

- Пользователя: 
  С точки зрения пользователя хорошая верстка, это та верстка, которая хорошо отображается на различных устройствах, имеет логичное расположение блоков, когда все интерактивные элементы соответстуют требованиям доступности, когда не возникает неочевидного поведения той или иной логики, когда страницы грузятся быстро и в целом верстка не создает неприятных ощущений, от которых хочется уйти с сайта и не возвращаться.

- Менеджера проекта:
  Когда верстка полностью удовлетворяет требования заказчика и менеджер уверен за продукт, который создала его команда.

- Дизайнера:
  Так как верстка это продукт, вытекающий из макетов дизайнера, то можно предположить, что хорошая верстка, это та верстка, которая полностью соответстует тому стилю и дизайнерским решениям, который использовал дизайнер в своем макете.

- Верстальщика:
  Хорошая верстка, с моей точки зрения, это та верстка, которая была реализована по всем правилам хорошего тона разработки. Соблюдена семантика верстки, использованы необходимые мета-теги, использованы alt и aria-label атрибуты для людей с ограниченными возможностями (критерий доступности), код является читабельным для других, использованы комментарии в местах со сложными логическими решениями.

- Клиентского программиста:
  Хорошая верстка для клиентского программиста - как мне кажется, это та верстка, которая проходит по всем критериям тестирования продукта, не падает, ничто ничему не мешает, не заползает, в общем соответствует тому поведению, что от него ожидает клиент.

- Серверного программиста:
  Верстка, которая построена так, что использование серверных технологий вкупе с готовой версткой не создает сложностей для слияния front c back частями продукта.
_________________

Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.  
Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

A2 В первую очередь, при разработке большого проекта и не только, необходимо, чтоб команда придерживалась одних инструментов для разработки и одного стайлгайда, который бы задавал ограничения на разработку и направление разработки. Для удобсвта изменения стилей, можно предусмотреть стилизацию с дальнейшей возможностью переиспользовать те или иные блоки в других частях сайта. Чтобы легко изменять цветовые стили в проекте можно использовать css-переменные, поменяв которые в одном месте изменят цвета сайта во всех тех местах, где они использовались.

_________________

Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать. 

A3 Чтобы сайт выглядел одинаково на разных устройствах под управлением различных OS с разнообразными дисплеями, необходимо использование адаптивной верстки с применением медиа-запросов, которые будут являться флагами для отображения той или иной версии сайта для конкретного устройства. Для проверки работоспособности и корректного отображения/соответствия макету необходимо использовать Pixel Perfect, работу на различных устройствах и разрешениях можно тестировать средствами разработчика браузера, работу js кода проверять в консоли браузера (не должно быть ошибок), верстка должна быть надежной и не ломаться при заполнении содержимым. 

_________________

Q4 Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

A4 Для отладки удобно использовать различного рода линтеры, валидаторы и IDE со предустановленными или устанавливаемыми плагинами, которые будут указывать на синтаксические ошибки и автоматически закрывать HTML теги.
_________________

Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

А5 Я сталкивался с ситуацией, когда страница отображается некорректно в некоторых браузерах, но проверку работоспособности в браузерах я проверяю, как правило, только после того, когда сделаю все необходимое для того, чтоб все было корректно. Это, в свою очередь, проставленные префиксы, медиа-запросы для retina дисплеев, а так же подготовленная под них графика. После того, как все возможные варианты исчерпаны, на помощь приходит всезнающий google. Однако, в ситуации, когда нет доступа к коду и есть какая-то проблема, то тут остается только развести руками, ибо решить проблему без кода перед глазами невозможно, а сказать явно в чем проблема...ну мы же не экстрасенсы) 
_________________

Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия? 

А6 Сообщил бы менеджеру проекта или, если такового не имеется в команде, то напрямую самому дизайнеру об этом недочете и потребовал бы его исправить. Иначе, если данный момент дизайнер не согласует и не продумает, впоследствии чего заказчик будет недоволен, то в конечном итоге переделывать придется мне - разработчику, а это лишняя трата человеческих и временных ресурсов.
_________________

Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). 
Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или и то, и другое? 
Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны? 

А7 Для развития в профессиональной сфере я использую различные форумы: Habr, Stackoverflow, Medium, GitHub, подкаст "Веб-стандарты", а так же, куда без них, это документации, на используемые в разработке интструменты :)
Для меня никогда не было проблемой верстать на HTML/CSS, но писать программы мне больше по душе, наверное, потому, что программирование это более разнообразное занятие, нежели просто верстка. По крайней мере я это так вижу.
На самом деле я очень любознательный человек и в своей жизни я часто произношу слово "интересно", когда вижу какие-то вещи, о которых я не знаю. Мне интересны области точных наук, в частности физика, электротехника, геометрия, различные теории, касающиеся космоса (теория струн, черные дыры и прочее прочее), машиностроение. В общем, мне интересны многие инженерные области :)
_________________

Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

A8 Меня зовут Алексей, мне 26 лет и я начинающий Frontend-разработчик. Успешно окончил школу и поступил в университет на инженера-строителя, но с подросткового возраста меня не покидал интерес к компьютерным технологиям и программированию. После универа пошел в армию, отслужил в войсках ВКС в подмосковье, под Ногинском. Во время службы исполнял роль, так скажем, авиадиспетчера. Защищал воздушные рубежи нашей столицы, чтоб никакая гадость не летела, а так же следил за полетами первых лиц государства, испытаниями новых авиационных образцов. В общем, было очень интересно, год прошел не зря :) После армии пошел работать строителем. На протяжении всего времени, когда я был строителем меня не покидала мысль, что я хочу быть программистом и, спустя некоторое время, я понял, что работать на стройке не для меня и это стало толчком в сторону IT разработки. В универе единственный из группы с интересом и любовью ходил на пары по информатике. Был опыт работы в организации, которая занималась разработкой и поддержкой сайтов на CMS-Bitrix, но там я понял, что работа с CMS - не то, что я хочу видеть на своем пути веб-разработчика. Теперь я здесь, сижу и пишу данное сообщение с надеждой, что вам будет интересно его читать. А то я сам по себе скромный человек и при личной встрече так много сразу не рассказал бы, наверное :D

<<<<<<< HEAD
=======
Выполнено с использованием ReactJS/Redux и TypeScript.

Работа проверена в Chrome, Firefox, Safari, IE11.

В проекте создан store с помощью redux, в котором хранятся объекты товаров, необходимых для рендера, которые в свою очередь хранятся в моковых данных в папке mocks, а также добавляются товары в поле chosenProducts, которые выбирает клиент (подобие корзины). Т.к. не было уточнения по поводу логики отображения надписей под карточками, их рендер был сделан в случайном порядке при каждом рендере карточки (при каждом клике)
>>>>>>> b5ceb672bb019b02ed5d47fbb285e14e9db58af2
