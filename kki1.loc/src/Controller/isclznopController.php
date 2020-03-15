<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
class isclznopController extends AbstractController
{
    /**
     * @Route("/lucky/number/isclznop")
     */
    public function number(): Response
    {
        return $this->render('isclznop.html.twig');
    }
}
