import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SkeletonItemComponent } from './skeleton-item/skeleton-item';
import { CustomSkeletonComponent } from './custom-skeleton/custom-skeleton';

@NgModule({
	declarations: [
		SkeletonItemComponent,
    CustomSkeletonComponent
	],
	imports: [IonicModule],
	exports: [
		SkeletonItemComponent,
    CustomSkeletonComponent
	]
})
export class ComponentsModule {}
