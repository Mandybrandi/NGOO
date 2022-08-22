#include <stdio.h>
#include <stdlib.h>

struct bioInfo
{
	char name[60];
	int age;
	char sex[10];
	char status[20];
	char occupation[50];
};


void main()
{
	struct bioInfo friends;
	struct bioInfo *ptr = &friends;

	printf("WELCOME TO SPIKE ENTERPRISE.\n To Serve you better, Please Provide the neccessary details\n");
	printf("Name: ");
	scanf("%s", friends.name);
	printf("Age: ");
	scanf("%d", &friends.age);
	printf("Gender: ");
	scanf("%s", friends.sex);
	printf("Marital Status: ");
	scanf("%s", friends.status);
	printf("Occupation: ");
	scanf("%s", ptr->occupation);
	
	printf("------WELCOME------ %s.\n------BELOW ARE THE DETAILS YOU PROVIDED------\n", friends.name);
	printf("Name: %s.\nAge: %d.\nGender: %s.\nMarital Status: %s.\nOccupation: %s.\n", ptr -> name, ptr->age, friends.sex, ptr -> status, friends.occupation);
}
