# -*- coding: utf-8 -*-
"""CO2 Emissions by vehicle (CANADA).ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1jdlxn4PoaAn88A7eP4rrS-GByHOdHZ6O

### CO2 EMISSIONS by vehices in CANADA
"""

data_filename = '/content/CO2 Emissions_Canada.csv'

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('/content/CO2 Emissions_Canada.csv')

df

df.head(100)

df.tail(100)

df.columns

df.isna

df.info()

df.describe()

df.dtypes

df.isna().sum()

df.fillna(0,inplace=True)

"""There are no missing values i.e. all the columns and rows are filled"""

df.groupby(['Make'])['CO2 Emissions(g/km)'].mean().plot(kind='bar', figsize=(10, 5))
plt.xlabel('Make',fontsize='15')
plt.ylabel('CO2 Emissions(g/km)',fontsize='15')
plt.title('Average CO2 Emissions by Vehicle Type',fontsize='20')
plt.xticks(rotation=90)
plt.tight_layout()
plt.show()

"""### Bugatti has the highest amount of CO2 emission by a vehicle"""

df.columns

df.groupby(['Make'])['CO2 Emissions(g/km)'].mean().sort_values(ascending=False).plot(kind='bar', figsize=(10, 5))

df.sort_values(by=['CO2 Emissions(g/km)', 'Model'], ascending=False)

"""###HYUNDAI IONIQ BLUE which has engine size 1.6 L has a fuel consumption comb of 4.1 (L/100 km) has a CO2 Emission of 96 g/km. And BUGATTI CHIRON has the fuel consumption comb of 22.2 (L/100 km) has a CO2 Emission of 522 g/km."""



df.groupby(['Model'])['CO2 Emissions(g/km)'].mean().sort_values(ascending=False).head(50).plot(kind='bar', figsize=(10, 5))
plt.xlabel('Model',fontsize='15')
plt.ylabel('CO2 Emissions(g/km)',fontsize='15')
plt.title('Top 50 Vehicles with Highest CO2 Emissions',fontsize='20')
plt.xticks(rotation=90)
plt.tight_layout()
plt.show()

df.groupby(['Model'])['CO2 Emissions(g/km)'].mean().sort_values(ascending=False)[50:100].plot(kind='bar', figsize=(10, 5))
plt.xlabel('Model',fontsize='15')
plt.ylabel('CO2 Emissions(g/km)',fontsize='15')
plt.title('Vehicles with CO2 Emissions between 51st and 100th Highest',fontsize='20')
plt.xticks(rotation=90)
plt.tight_layout()
plt.show()

heatmap_data = df.pivot_table(index='Model', columns='CO2 Emissions(g/km)', aggfunc='size', fill_value=0)
plt.figure(figsize=(15, 10))
sns.heatmap(heatmap_data, cmap='viridis', annot=True, fmt='d', linewidths=.5)
plt.xlabel('CO2 Emissions(g/km)')
plt.ylabel('Vehicle Model')
plt.title('CO2 Emissions Heatmap by Vehicle Model')
plt.show()

df.columns

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
X = df[['Engine Size(L)', 'Cylinders', 'Fuel Consumption City (L/100 km)']]
y = df['CO2 Emissions(g/km)']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
mse = mean_squared_error(y_test, predictions)
r2 = r2_score(y_test, predictions)
print(f'Mean Squared Error: {mse}')
print(f'R-squared: {r2}')

sns.pairplot(df[['Engine Size(L)', 'Cylinders', 'Fuel Consumption City (L/100 km)', 'CO2 Emissions(g/km)']])
plt.suptitle('Pair Plot of Key Features', y=1.02)
plt.show()

X_train_reshaped = X_train.values.reshape(-1,1)
X_test_reshaped = X_test.values.reshape(-1,1)
y_train_reshaped = y_train.values.reshape(-1,1)
y_test_reshaped = y_test.values.reshape(-1,1)

print(X_train.values.reshape)
print(X_test.values.reshape)
print(y_train.values.reshape)
print(y_test.values.reshape)



