import matplotlib.pyplot as plt
import seaborn as sb

def Barchart (Title0="Test",Xaxis0="X",Xalues0="1,2,3",Yaxis0="Y",Yalues0="4,5,6"):
    plt.figure()
    Xalues0 = Xalues0.split(",")
    Yalues0 = Yalues0.split(",")
    Yalues0 = [int(i) for i in Yalues0]
    sb.barplot(x=Xalues0,y=Yalues0)
    plt.xlabel(Xaxis0)
    plt.ylabel(Yaxis0)
    plt.title(Title0)
    plt.savefig("Project/Slots/Slots-main/me/public/images/UserBar.png")
    return 'done'

def ScatterChart(Title1,Xaxis1,Xalues1,Yaxis1,Yalues1):
    plt.figure()
    Xalues1 = Xalues1.split(",")
    Yalues1 = Yalues1.split(",")
    Yalues1 = [int(i) for i in Yalues1]
    sb.scatterplot(x=Xalues1,y=Yalues1)
    plt.xlabel(Xaxis1)
    plt.ylabel(Yaxis1)
    plt.title(Title1)
    plt.savefig("Project/Slots/Slots-main/me/public/images/UserScatter.png")
    return 'done'

def Histogram(Title2,Values,Xaxis2="",Yaxis2=""):
    plt.figure()
    Values = Values.split(",")
    Values = [int(i) for i in Values]
    sb.histplot(x=Values,bins=len(Values),kde=True)
    plt.xlabel(Xaxis2)
    plt.ylabel(Yaxis2)
    plt.title(Title2)
    plt.savefig("Project/Slots/Slots-main/me/public/images/UserHistogram.png")
    return 'done'

def linePlot(Title3,Xaxis3,Xalues3,Yaxis3,Yalues3):
    plt.figure()
    Xalues3 = Xalues3.split(",")
    Yalues3 = Yalues3.split(",")
    Yalues3 = [int(i) for i in Yalues3]
    sb.lineplot(x=Xalues3,y=Yalues3)
    plt.xlabel(Xaxis3)
    plt.ylabel(Yaxis3)
    plt.title(Title3)
    plt.savefig("Project/Slots/Slots-main/me/public/images/UserLine.png")
    return 'done'

def Piechart (Title4,Names,amount):
    plt.figure()
    Names = Names.split(",")
    amount = amount.split(",")
    amount = [float(i) for i in amount]
    plt.pie(amount,labels=Names)
    plt.title(Title4)
    plt.savefig("Project/Slots/Slots-main/me/public/images//UserPie.png")
    return 'done'

# Barchart("year vs amount", "years", "2018,2019,2020,2021", "amount", "80,90,100,120")
# ScatterChart("year vs amount", "years", "2018,2019,2020,2021", "amount", "80,90,100,120")
# Histogram("year vs amount", "80,90,100,120,43,2,32,24,22,41,31,33")
# linePlot("amount", "years", "2018,2019,2020,2021", "amount", "80,90,100,120")
# Piechart("Favroite foods", "Pizza,Burger,French fries,Taco,Samosa,Cake", "80,70,50,30,30,60")