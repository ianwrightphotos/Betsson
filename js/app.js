function changeClass(MyElement, Class, ClassAlt, MyElement2, Class2, Class2Alt) {
    if (document.getElementById(MyElement).classList.contains(Class)) {
        document.getElementById(MyElement).classList.remove(Class);
        document.getElementById(MyElement).classList.add(ClassAlt);
        document.getElementById(MyElement2).classList.remove(Class2);
        document.getElementById(MyElement2).classList.add(Class2Alt);
    }
    else
    {
        document.getElementById(MyElement).classList.remove(ClassAlt);
        document.getElementById(MyElement).classList.add(Class);
        document.getElementById(MyElement2).classList.remove(Class2Alt);
        document.getElementById(MyElement2).classList.add(Class2);
    }
}