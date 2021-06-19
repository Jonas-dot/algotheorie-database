#Plottertour
import numpy as np

def plottertour(Eingabe: list) -> (int):
    minimal_cost = 0
    gesamtkosten = 0
    aktueller_punkt = 0
    plot_cost = 0
    plot_cost_temp = 0
    counter = 0
    besucht = []
    #Hinweg
    if ( counter < len(Eingabe)-1):
        while (aktueller_punkt < len(Eingabe)-1):
            counter = aktueller_punkt+1
            while (counter < len(Eingabe)):
                if(Eingabe[aktueller_punkt][0]<(Eingabe[len(Eingabe)-1])[0]):
                    new_cost = abs(((Eingabe[aktueller_punkt])[0])-((Eingabe[counter])[0]))
                    new_cost = new_cost + abs(((Eingabe[aktueller_punkt])[1])-((Eingabe[counter])[1]))
                    if(new_cost<minimal_cost or minimal_cost == 0):
                        minimal_cost = new_cost
                        plot_cost_temp = abs((Eingabe[aktueller_punkt][1])-(Eingabe[counter][1]))
                        neuer_punkt = counter
                    counter = counter + 1
            aktueller_punkt = neuer_punkt
            gesamtkosten += minimal_cost
            plot_cost += plot_cost_temp
            minimal_cost = 0
            besucht.append(neuer_punkt)

    #rückweg
    while (aktueller_punkt > 0):
        counter = aktueller_punkt-1
        while (counter >= 0):
            if(Eingabe[aktueller_punkt][0]>(Eingabe[0])[0] and counter not in besucht):
                new_cost = abs(((Eingabe[aktueller_punkt])[0])-((Eingabe[counter])[0]))
                new_cost += abs(((Eingabe[aktueller_punkt])[1])-((Eingabe[counter])[1]))
                if(new_cost<minimal_cost or minimal_cost == 0):
                    minimal_cost = new_cost
                    plot_cost_temp = abs((Eingabe[aktueller_punkt][1])-(Eingabe[counter][1]))
                    neuer_punkt = counter
            counter = counter - 1
        aktueller_punkt = neuer_punkt
        gesamtkosten += minimal_cost
        plot_cost += plot_cost_temp
        minimal_cost = 0
        besucht.append(aktueller_punkt)
        print(besucht)

    return plot_cost




if __name__ == '__main__':
    Eingabe1 = [(0,0),(1,5),(2,2),(5,1),(6,4),(7,0),(8,3)]
    Eingabe2 = [(1, 1), (2, 3), (3, 4), (4, 2), (5, 4), (6, 6)]
    print(plottertour(Eingabe2))